import urllib.request, re

urls = [
    "https://brain.global/",
    "https://avilaspaces.com/en/",
    "https://www.lopesribeiro.pt/",
    "https://revistabusinessportugal.pt/",
    "https://pgaportugal.pt/",
    "https://junkservice.pt/"
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
        
        imgs = re.findall(r"<img[^>]+src=[\"']([^\"']+)[\"'][^>]*>", html, re.IGNORECASE)
        logo = next((img for img in imgs if "logo" in img.lower()), None)
        print(f"{url} -> {logo}")
    except Exception as e:
        print(f"{url} -> Error: {e}")
