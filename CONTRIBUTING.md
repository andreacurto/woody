# Contribuire a Woody

Grazie per l'interesse nel contribuire a Woody! 🪵

> ⚠️ Il progetto è in fase iniziale (pre-release). Per ora i contributi sono limitati a segnalazioni e suggerimenti. Man mano che il sistema si stabilizza, apriremo a PR esterne.

## Come segnalare un problema

1. Controlla che non esista già una [issue aperta](https://github.com/andreacurto/woody/issues)
2. Apri una nuova issue usando il template appropriato
3. Descrivi il problema con il maggior dettaglio possibile

## Convenzioni

### Branch

```
feat/nome-feature     — nuova feature
fix/nome-bug          — bugfix
docs/cosa             — documentazione
chore/cosa            — manutenzione
refactor/cosa         — refactoring
```

### Commit

Usiamo [Conventional Commits](https://www.conventionalcommits.org/) in italiano:

```
feat(css): aggiunge stili element button
fix(react): corregge focus ring su Input
docs(tokens): documenta naming dei color token
a11y(css): migliora contrasto del badge
```

### CSS

- Prefisso `wd-` su tutte le classi e custom properties
- BEM leggero: `wd-block`, `wd-block--modifier`, `wd-block__element`
- Zero `!important`, zero valori hardcoded
- Solo token Semantic o Component nel CSS dei componenti

### Codice

- TypeScript strict, nessun `any`
- Functional component con hooks
- `forwardRef` su tutti i component che wrappano elementi HTML

## Setup locale

```bash
# Clona il repo
git clone https://github.com/andreacurto/woody.git
cd woody

# Installa le dipendenze
pnpm install

# Build di tutti i packages
pnpm build

# Avvia lo sviluppo
pnpm dev
```

## Licenza

Contribuendo a Woody, accetti che i tuoi contributi siano rilasciati sotto [licenza MIT](./LICENSE).
