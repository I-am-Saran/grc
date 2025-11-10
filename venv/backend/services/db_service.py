from supabase import create_client
import os
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def get_all_controls():
    try:
        response = supabase.table("security_controls").select("*").execute()
        if response.data:
            return {"status": "success", "data": response.data}
        return {"status": "empty", "message": "No records found"}
    except Exception as e:
        return {"status": "error", "message": str(e)}
