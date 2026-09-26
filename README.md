# Reindirizzamento di iclaudecanti

Il repository **iclaudecanti** è stato trasferito all'organizzazione della scuola e ora si chiama **orario**:
https://github.com/comprensivoalmese/orario

Questo repository serve solo a far funzionare i vecchi link del sito
(`alessandrotrino-creator.github.io/iclaudecanti/...`): ogni pagina porta alla stessa
pagina del nuovo sito `comprensivoalmese.github.io/orario/...`, con gli stessi parametri.

- `iclaudecanti/**/index.html`: reindirizzamento delle pagine principali (anche per le app installate e le LIM)
- `404.html`: reindirizzamento di qualsiasi altro vecchio indirizzo sotto `/iclaudecanti`
- `iclaudecanti/app/sw.js`: disinstalla dai dispositivi la vecchia app installata

Si chiama `alessandrotrino-creator.github.io` (e non `iclaudecanti`) apposta: così su GitHub resta libero
il vecchio nome e i vecchi link al repository continuano a portare a quello della scuola.
