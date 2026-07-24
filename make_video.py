import os
import sys
import numpy as np
from PIL import Image

def generate_video():
    import cv2

    image_files = [
        'assets/about_artisan_work.jpg',
        'assets/work_grand_galleon.jpg',
        'assets/work_galleon_marble_display.jpg',
        'assets/work_ocean_diorama.jpg',
        'assets/work_locomotive.jpg',
        'assets/work_travel_desk_car.jpg',
        'assets/work_stave_church.jpg',
        'assets/work_timber_cottage.jpg',
        'assets/work_canvas_canoe.jpg',
        'assets/work_junk_shelf.jpg',
        'assets/work_miniature_violin.jpg'
    ]

    output_path = 'assets/woodworking_masterworks.mp4'
    fps = 30
    width = 1280
    height = 720
    slide_frames = 90  # 3 seconds per slide
    fade_frames = 20   # ~0.66 seconds dissolve transition

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

    processed_imgs = []
    for path in image_files:
        if not os.path.exists(path):
            continue
        pil_img = Image.open(path).convert('RGB')
        
        img_w, img_h = pil_img.size
        aspect_target = width / height
        aspect_img = img_w / img_h
        
        if aspect_img > aspect_target:
            new_h = height
            new_w = int(height * aspect_img)
        else:
            new_w = width
            new_h = int(width / aspect_img)
            
        pil_img = pil_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        left = (new_w - width) // 2
        top = (new_h - height) // 2
        pil_img = pil_img.crop((left, top, left + width, top + height))
        
        np_img = np.array(pil_img)
        bgr_img = cv2.cvtColor(np_img, cv2.COLOR_RGB2BGR)
        processed_imgs.append(bgr_img)

    if not processed_imgs:
        print("No images found!")
        return

    print(f"Loaded {len(processed_imgs)} masterwork images. Generating video...")

    num_imgs = len(processed_imgs)

    for i in range(num_imgs):
        curr_img = processed_imgs[i]
        next_img = processed_imgs[(i + 1) % num_imgs]

        for f in range(slide_frames):
            scale = 1.0 + (f / slide_frames) * 0.08
            h_s, w_s = int(height * scale), int(width * scale)
            zoomed = cv2.resize(curr_img, (w_s, h_s), interpolation=cv2.INTER_LINEAR)
            
            crop_x = (w_s - width) // 2
            crop_y = (h_s - height) // 2
            frame = zoomed[crop_y:crop_y+height, crop_x:crop_x+width]

            if f >= (slide_frames - fade_frames):
                alpha = (f - (slide_frames - fade_frames)) / fade_frames
                frame = cv2.addWeighted(frame, 1.0 - alpha, next_img, alpha, 0)

            out.write(frame)

    out.release()
    print(f"SUCCESS: Generated background video at {output_path} ({os.path.getsize(output_path)} bytes)")

if __name__ == '__main__':
    generate_video()
