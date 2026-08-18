from pathlib import Path
from PIL import Image, ImageDraw

OUTPUT = Path("public")
BG = "#1E3B35"
PAPER = "#F5F0E6"
CLAY = "#B94F36"

for size in (16, 32, 180):
    image = Image.new("RGBA", (size, size), BG)
    draw = ImageDraw.Draw(image)
    pad = max(2, round(size * 0.14))
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=round(size * 0.22), fill=BG)
    draw.ellipse((pad, pad, size - pad, size - pad), fill=PAPER)
    cx = size / 2
    cy = size / 2
    stroke = max(1, round(size * 0.055))
    lines = [((cx, size * 0.25), (cx, size * 0.70)), ((cx, cy), (size * 0.31, size * 0.36)), ((cx, cy), (size * 0.69, size * 0.36)), ((cx, size * 0.70), (size * 0.40, size * 0.80)), ((cx, size * 0.70), (size * 0.60, size * 0.80))]
    for start, end in lines:
        draw.line((start, end), fill=CLAY, width=stroke)
    image.save(OUTPUT / f"favicon-{size}.png")
