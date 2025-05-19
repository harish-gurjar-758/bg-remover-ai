from PIL import Image
import cv2
import os

def enhance_image_quality(file_path):
    image = cv2.imread(file_path)
    enhanced = cv2.detailEnhance(image, sigma_s=10, sigma_r=0.15)
    output_path = file_path.replace(".", "_enhanced.")
    cv2.imwrite(output_path, enhanced)
    return output_path
