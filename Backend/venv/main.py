from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import pytesseract
from transformers import pipeline
import io

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

summarizer = pipeline("summarization")

@app.post("/upload/")
async def upload_image(image: UploadFile = File(...)):
    contents = await image.read()
    img = Image.open(io.BytesIO(contents))
    extracted_text = pytesseract.image_to_string(img)

    if len(extracted_text.strip()) < 20:
        return {"text": extracted_text, "summary": "Not enough text to summarize."}

    summary = summarizer(extracted_text, max_length=100, min_length=30, do_sample=False)[0]["summary_text"]
    return {"text": extracted_text, "summary": summary}
