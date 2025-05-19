from fastapi import FastAPI, Request
from pydantic import BaseModel
from services.remove_bg import remove_background_image
from services.enhance_image import enhance_image_quality
from services.process_gif_video import remove_bg_gif_video
import uvicorn

app = FastAPI()

class FilePath(BaseModel):
    file_path: str

@app.post("/remove-bg")
async def remove_bg_api(data: FilePath):
    result_path = remove_background_image(data.file_path)
    return {"status": "success", "output": result_path}

@app.post("/enhance-image")
async def enhance_image_api(data: FilePath):
    result_path = enhance_image_quality(data.file_path)
    return {"status": "success", "output": result_path}

@app.post("/remove-bg-gif-video")
async def remove_bg_gif_video_api(data: FilePath):
    result_path = remove_bg_gif_video(data.file_path)
    return {"status": "success", "output": result_path}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
