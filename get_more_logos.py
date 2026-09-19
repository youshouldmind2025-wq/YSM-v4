import urllib.request, re

urls = [
    "https://www.lopesribeiro.pt/",
    "https://revistabusinessportugal.pt/",
    "https://brain.global/",
    "https://avilaspaces.com/en/"
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
        
        imgs = re.findall(r"<img[^>]+src=[\"']([^\"']+)[\"'][^>]*>", html, re.IGNORECASE)
        # print top 5 images for manual inspection
        print(f"--- {url} ---")
        for img in imgs[:5]:
            print(img)
    except Exception as e:
        print(f"{url} -> Error: {e}")
