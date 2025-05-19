import cv2
import os

def remove_bg_gif_video(file_path):
    cap = cv2.VideoCapture(file_path)
    fps = cap.get(cv2.CAP_PROP_FPS)
    width  = int(cap.get(3))
    height = int(cap.get(4))
    output_path = file_path.replace(".", "_nobg.")

    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        mask = cv2.createBackgroundSubtractorMOG2().apply(frame)
        frame[mask == 0] = [0, 0, 0]
        out.write(frame)

    cap.release()
    out.release()
    return output_path
