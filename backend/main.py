from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services.db_service import get_all_controls
from utils.response import success_response, error_response

app = FastAPI(title="Security Controls API")

# ✅ CORS Setup (Frontend ↔ Backend)
origins = ["*"]  # Restrict to your Vercel domain in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/controls")
async def fetch_controls():
    try:
        result = get_all_controls()
        if result["status"] == "success":
            return success_response(result["data"], "Fetched controls successfully")
        else:
            return error_response(result["message"], 404)
    except Exception as e:
        return error_response(e)
