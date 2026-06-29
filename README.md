# 🚀 Containerized AI Document Platform
### Cloud-Native RAG Financial Assistant with FastAPI, React, Docker, ChromaDB, Gemini and GitHub Actions CI/CD

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![ChromaDB](https://img.shields.io/badge/ChromaDB-Vector_DB-5B21B6?style=for-the-badge)
![Gemini](https://img.shields.io/badge/Gemini-LLM-4285F4?style=for-the-badge&logo=google&logoColor=white)

</div>

---

# 📌 Overview

Containerized AI Document Platform is a cloud-native Retrieval-Augmented Generation (RAG) application that enables users to upload financial PDF documents, perform semantic search using vector embeddings, and generate source-grounded answers using Google's Gemini models.

The project follows modern cloud engineering practices by separating frontend and backend services into independent Docker containers, orchestrating them using Docker Compose, and automating validation using GitHub Actions CI/CD pipelines.

This project combines:

- AI Engineering
- Backend Development
- Containerization
- CI/CD Automation
- Cloud-Native Architecture
- Semantic Search
- Vector Databases

---

# 🎯 Why I Built This

I built this project to understand how modern AI applications are designed, containerized, automated, and prepared for cloud deployment.

The primary goals were:

- Build a practical Retrieval-Augmented Generation application
- Learn vector databases and semantic search
- Containerize a multi-service application using Docker
- Implement CI/CD automation using GitHub Actions
- Understand cloud-native application architecture
- Practice production-style backend/frontend integration
- Explore observability, deployment automation, and infrastructure concepts

---

# ✨ Features

### AI Features

- Upload finance-related PDF documents
- Extract document text using pypdf
- Split documents into retrievable chunks
- Generate embeddings using sentence-transformers
- Store vectors in ChromaDB
- Perform semantic similarity search
- Generate source-grounded answers using Gemini
- Return source references for answer transparency
- Fallback retrieval mode if LLM generation fails

### Cloud-Native Features

- Independent frontend and backend containers
- Docker Compose orchestration
- GitHub Actions CI/CD pipeline
- Environment-based configuration
- Persistent vector database volumes
- Health check endpoints
- Container restart policies
- CORS-enabled service communication

---

# ☁️ Why This Is Cloud-Native

This application follows several cloud-native engineering principles:

| Cloud-Native Principle | Implementation |
|---|---|
| Containerization | Docker |
| Service Separation | FastAPI + React |
| Environment Configuration | .env files |
| Infrastructure Automation | Docker Compose |
| CI/CD Automation | GitHub Actions |
| Stateless Services | Backend containers |
| Persistent Storage | ChromaDB volumes |
| Health Monitoring | /health endpoint |
| API-first Architecture | FastAPI |

The application is designed so it can later be deployed to:

- Google Cloud Run
- Google Kubernetes Engine
- AWS ECS
- AWS EKS
- Azure Container Apps
- Kubernetes clusters

---

# 🏗 Architecture

```text
                    GitHub Repository
                            │
                            ▼
                    GitHub Actions CI/CD
                            │
                            ▼
                     Docker Build
                            │
                            ▼
                    Docker Compose
                            │
          ┌─────────────────┴─────────────────┐
          ▼                                   ▼
     React Frontend                    FastAPI Backend
          │                                   │
          ▼                                   ▼
      User Interface                  RAG Pipeline
                                              │
                                              ▼
                                       ChromaDB
                                              │
                                              ▼
                                  Sentence Transformers
                                              │
                                              ▼
                                          Gemini
```

---

# 🧠 RAG Pipeline

```text
PDF Upload
    │
    ▼
Text Extraction
    │
    ▼
Chunking
    │
    ▼
Embedding Generation
    │
    ▼
ChromaDB Storage
    │
    ▼
Semantic Retrieval
    │
    ▼
Gemini Prompt
    │
    ▼
Source Grounded Answer
```

---

# ⚙️ Technology Stack

| Category | Technology |
|---|---|
| Frontend | React, Vite |
| Backend | FastAPI, Uvicorn |
| AI Model | Gemini |
| Embeddings | sentence-transformers |
| Vector Database | ChromaDB |
| PDF Processing | pypdf |
| Containerization | Docker |
| Orchestration | Docker Compose |
| CI/CD | GitHub Actions |
| Environment Management | python-dotenv |
| Programming Languages | Python, JavaScript |

---

# 📁 Project Structure

```text
containerized-ai-document-platform/

├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── rag_pipeline.py
│   │   ├── vector_store.py
│   │   ├── text_splitter.py
│   │   ├── pdf_loader.py
│   │   └── schemas.py
│   │
│   ├── Dockerfile
│   ├── requirements.txt
│   └── .dockerignore
│
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# 🐳 Running with Docker

Clone repository:

```bash
git clone https://github.com/aadi090204/containerized-ai-document-platform.git

cd containerized-ai-document-platform
```

Create environment file:

```bash
cp .env.example .env
```

Add:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Build containers:

```bash
docker compose build
```

Start application:

```bash
docker compose up
```

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:8000
```

Swagger:

```text
http://localhost:8000/docs
```

---

# 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /health | Health check |
| POST | /upload | Upload PDF |
| POST | /search | Semantic search |
| POST | /ask | Ask question |
| DELETE | /documents/reset | Reset vector database |

---

# 🔄 CI/CD Pipeline

The GitHub Actions pipeline automatically:

- Checks out source code
- Builds backend Docker image
- Builds frontend Docker image
- Validates Docker Compose configuration
- Verifies container startup
- Executes health checks
- Detects build failures before deployment

---

# 📚 Key Learnings

Through this project I learned:

- Retrieval-Augmented Generation architecture
- Vector databases and semantic search
- Prompt engineering
- FastAPI backend development
- React frontend integration
- Docker containerization
- Docker Compose orchestration
- GitHub Actions CI/CD
- Environment-based configuration
- Cloud-native application design
- Service communication and observability

---

# 🚀 Future Improvements

- Deploy on Google Cloud Run
- Deploy on Kubernetes
- Add Prometheus metrics
- Add Grafana dashboards
- Add JWT authentication
- Add multi-document support
- Add document deletion
- Add Redis caching
- Add OpenTelemetry tracing
- Add automated testing pipeline

---

# 👨‍💻 Author

**Adithya Anil**

- AI Engineer
- DevOps Engineer
- Cloud-Native Enthusiast

GitHub:
https://github.com/aadi090204
