✨ Features
- 📤 Upload any image containing text (PNG, JPG, etc.)
- 🔍 Extracts text using Tesseract OCR
- 🧠 Summarizes extracted text using HuggingFace Transformers
- 🖥️ Frontend built with React + TailwindCSS (Vite)
- 🚀 Backend powered by FastAPI

🗂️ Project Structure

![Screenshot (277)](https://github.com/user-attachments/assets/44fef2f1-5bbb-44bf-9c01-c6f77e69ed35)


🚀 Getting Started
- Python 3.10+
- Node.js (v18+)
- Tesseract OCR installed on your machine:
  - Download for Windows: https://github.com/tesseract-ocr/tesseract

🔧 Backend Setup (FastAPI + HuggingFace)

cd Backend

**Create virtual environment**

python -m venv venv


**Activate (choose one)**

**PowerShell**

.\venv\Scripts\Activate.ps1

**CMD**

venv\Scripts\activate.bat

**macOS/Linux**

source venv/bin/activate

**Install dependencies**

pip install -r requirements.txt

**Run development server**

uvicorn main:app --reload

#🎨 Frontend Setup (Vite + React)

cd Image-Summarizer

npm install

npm run dev

📦 Tech Stack
Frontend        | Backend          | NLP/OCR
----------------|------------------|----------------------------
React + Vite    | FastAPI (Python) | pytesseract, HuggingFace Transformers
Tailwind CSS    | Uvicorn server   | T5 / BART Summarization Models


📌 To Do / Future Enhancements
- [ ] PDF export of summary
- [ ] Dark mode toggle
- [ ] Deploy on Render (backend) and Vercel (frontend)
- [ ] Add toast notifications
- [ ] Use DistilBART for faster summarization



🧑‍💻 Author
Taapopi Ndeshipanda
GitHub: https://github.com/taapopi
