from fastapi.responses import JSONResponse

def success_response(data, message="Success"):
    return JSONResponse(status_code=200, content={"status": "success", "message": message, "data": data})

def error_response(error, code=500):
    return JSONResponse(status_code=code, content={"status": "error", "message": str(error)})
