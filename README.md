# 🪵 Woody

**Modular, accessible design system for landing pages, marketing sites & e-commerce.**

Woody è un design system open-source che parte da Figma e arriva al codice tramite una pipeline automatizzata. Token, stili e componenti vivono in un'unica fonte di verità.

> ⚠️ **Stato: pre-release (v0.x)** — Il progetto è in sviluppo attivo. L'API non è stabile e tutto può cambiare.

---

## ✨ Caratteristiche

- **Accessibile** — WCAG 2.1 AA come requisito, non come afterthought
- **Tematizzabile** — Cambia colori, font e spacing sovrascrivendo i token, senza toccare il codice
- **Framework-agnostic** — Il core CSS funziona ovunque. I wrapper React (e altri) si appoggiano sopra
- **Figma-first** — Le Figma Variables sono la source of truth. La pipeline genera il codice
- **Modulare** — Usa solo quello che ti serve. Ogni pezzo funziona indipendentemente

## 📦 Packages

| Package | Descrizione | Stato |
|---------|-------------|-------|
| `@woody-ui/tokens` | Design token (CSS Custom Properties, JSON, TS) | 🔜 In arrivo |
| `@woody-ui/css` | Stili CSS framework-agnostic | 🔜 In arrivo |
| `@woody-ui/react` | Componenti React | 🔜 In arrivo |
| `@woody-ui/storybook` | Documentazione interattiva | 🔜 In arrivo |

## 🏗️ Architettura

```
Figma Variables → JSON → Style Dictionary → CSS + TS
                                              ↓
                                         @woody-ui/css (framework-agnostic)
                                              ↓
                                         @woody-ui/react (wrapper)
```

I token si organizzano su tre livelli:

- **Global** — Valori grezzi (`--wd-color-blue-600`). Mai usati nei componenti
- **Semantic** — Ruoli (`--wd-color-primary`). Usati nei componenti
- **Component** — Override specifici (`--wd-button-bg`). Opzionali

## 🚀 Quick Start

> Il progetto è in fase di setup. Le istruzioni di installazione arriveranno con la prima release.

## 🤝 Contributing

Leggi [CONTRIBUTING.md](./CONTRIBUTING.md) per le linee guida su come contribuire.

## 📄 License

[MIT](./LICENSE) © Andrea Curto
