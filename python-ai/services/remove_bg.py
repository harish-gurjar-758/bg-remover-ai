from rembg import remove
from PIL import Image
import os

def remove_background_image(file_path):
    with open(file_path, 'rb') as input_file:
        input_data = input_file.read()
    output_data = remove(input_data)
    output_path = file_path.replace(".", "_nobg.")
    with open(output_path, 'wb') as out:
        out.write(output_data)
    return output_path
