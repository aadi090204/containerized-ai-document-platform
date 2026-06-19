import { useState } from "react";
import "./App.css";

const API_BASE_URL = "http://127.0.0.1:8000";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a PDF file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    setUploadStatus("");

    try {
      const response = await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Upload failed.");
      }

      setUploadStatus(
        `Uploaded successfully: ${data.filename} (${data.chunks_stored} chunks indexed)`
      );
    } catch (error) {
      setUploadStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAsk = async () => {
    if (!question.trim()) {
      setAnswer("Please enter a question.");
      return;
    }

    setLoading(true);
    setAnswer("");
    setSources([]);

    try {
      const response = await fetch(`${API_BASE_URL}/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to get answer.");
      }

      setAnswer(data.answer);
      setSources(data.sources || []);
    } catch (error) {
      setAnswer(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    setLoading(true);
    setUploadStatus("");
    setAnswer("");
    setSources([]);

    try {
      const response = await fetch(`${API_BASE_URL}/documents/reset`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Reset failed.");
      }

      setUploadStatus(data.message);
    } catch (error) {
      setUploadStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app-container">
      <section className="hero-section">
        <p className="eyebrow">AI Document Assistant</p>
        <h1>Finance RAG Advisor</h1>
        <p className="subtitle">
          Upload finance-related PDFs, ask natural language questions, and get
          source-grounded answers using FastAPI, ChromaDB, sentence-transformers,
          and Gemini.
        </p>
      </section>

      <section className="card">
        <h2>1. Upload PDF</h2>
        <p className="section-text">
          Select a finance document PDF and index it into the local vector
          database.
        </p>

        <div className="upload-row">
          <input
            type="file"
            accept="application/pdf"
            onChange={(event) => setSelectedFile(event.target.files[0])}
          />
          <button onClick={handleUpload} disabled={loading}>
            Upload & Index
          </button>
        </div>

        {uploadStatus && <p className="status">{uploadStatus}</p>}
      </section>

      <section className="card">
        <h2>2. Ask a Question</h2>
        <p className="section-text">
          Ask a question based on the uploaded document.
        </p>

        <textarea
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Example: What is an emergency fund and why is it important?"
          rows="4"
        />

        <button onClick={handleAsk} disabled={loading}>
          Ask Question
        </button>

        {answer && (
          <div className="answer-box">
            <h3>Answer</h3>
            <p>{answer}</p>
          </div>
        )}

        {sources.length > 0 && (
          <div className="sources-box">
            <h3>Sources</h3>
            <ul>
              {sources.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="card danger-zone">
        <h2>Reset Indexed Documents</h2>
        <p className="section-text">
          Clear the local ChromaDB collection during testing.
        </p>
        <button className="secondary-button" onClick={handleReset} disabled={loading}>
          Reset Vector Database
        </button>
      </section>

      {loading && <p className="loading">Processing...</p>}
    </main>
  );
}

export default App;