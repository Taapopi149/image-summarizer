import React from "react";
import { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setSummary(""); // reset summary
    }
  };

const simulateSummary = async () => {
  if (!image) return;

  setLoading(true);
  setSummary("");

  const formData = new FormData();
  formData.append("image", image);

  try {
    const response = await fetch("http://localhost:8000/upload/", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setLoading(false);

    if (data.summary) {
      setSummary(data.summary);
    } else {
      setSummary("No summary returned.");
    }
  } catch (error) {
    console.error("Error:", error);
    setLoading(false);
    setSummary("Error processing image.");
  }
};


  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(summary)
      .then(() => alert("Summary copied to clipboard!"))
      .catch((err) => alert("Failed to copy" + err));
  };

  const downloadAsText = () => {
    const element = document.createElement("a");
    const file = new Blob([summary], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "summary.txt";
    document.body.appendChild(element); // Required for Firefox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="image-uploader">
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Uploaded preview" />
        </div>
      )}

      {preview && (
        <button
          onClick={simulateSummary}
          style={{
            marginTop: "16px",
            padding: "10px 20px",
            backgroundColor: "#4f46e5",
            color: "#fff",
            fontWeight: "600",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Summarize Image
        </button>
      )}

      {loading && <div className="loading-spinner"></div>}

      {summary && (
        <div className="summary-box">
          <strong>Summary:</strong>
          <p>{summary}</p>

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button
              onClick={copyToClipboard}
              style={{
                padding: "6px 12px",
                backgroundColor: "#10b981",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Copy
            </button>

            <button
              onClick={downloadAsText}
              style={{
                padding: "6px 12px",
                backgroundColor: "#3b82f6",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
