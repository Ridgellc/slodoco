"""Bake menu.json into app.js so the page also works opened straight from disk."""
import json
from pathlib import Path

here = Path(__file__).parent
menu = json.dumps(json.loads((here / "menu.json").read_text()), ensure_ascii=False, separators=(",", ":"))
src = (here / "app.src.js").read_text()
(here / "app.js").write_text(src.replace("/*MENU*/", menu))
print("app.js built")
