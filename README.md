# 🎯 Balote Rezultati

Web aplikacija za vođenje evidencije utakmica u balotama.

## Značajke

- 📊 Statistika ekipa (pobjede, porazi, bodovi)
- 🏆 Scorecard prikaz po partijama
- 🔒 Admin panel zaštićen PIN-om
- 📱 PWA — može se instalirati na mobitel
- 💾 Podaci se čuvaju lokalno u browseru (localStorage)

## Korištenje

Aplikacija je dostupna na: **https://[tvoj-username].github.io/balote**

### Instalacija na mobitel
1. Otvori stranicu u Chrome/Safari
2. Pritisni "Dodaj na početni zaslon"

## Struktura

```
balote/
├── index.html        # Glavna aplikacija
├── manifest.json     # PWA manifest
├── sw.js             # Service worker (offline podrška)
├── favicon.ico       # Favicon
├── apple-touch-icon.png
└── icons/            # PWA ikone (sve veličine)
```

## Razvijeno

Aplikacija koristi čisti HTML/CSS/JavaScript bez vanjskih ovisnosti osim Tabler Icons.
