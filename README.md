# Projekt 2 – Algorytm rozmieniania monet (w systemie Królowej Wiktorii)

Aplikacja prezentuje, w jaki sposób można zastosować **programowanie dynamiczne** do rozwiązania problemu rozmieniania kwoty wyrażonej w pensach na jak **najmniejszą liczbę monet** (uwzględniając półpensówki i ćwiartki).

## Spis treści
- [Opis](#opis)
- [Technologie](#technologie)
- [Funkcjonalności](#funkcjonalności)
- [Autor](#autor)

---

## Opis

W czasach Sherlocka Holmesa (epoka Królowej Wiktorii) Anglia miała niezwykle złożony system monetarny:
- 1 funt = 20 szylingów
- 1 szyling = 12 pensów
- 1 pens dzielił się na 2 półpensówki lub 4 ćwiartki
- 1 korona = 5 szylingów
- 1 gwinea = 21 szylingów

Celem aplikacji jest wyznaczenie **minimalnej liczby „monet”** (w tym półpensówek i ćwiartek), aby wydać dowolną kwotę wyrażoną w pensach. Aplikacja została zrealizowana w technologii **Next.js 13** (App Router) z użyciem **Material-UI** jako biblioteki komponentów, co nadaje aplikacji atrakcyjny wygląd i responsywność.

---

## Technologie

- **TypeScript** – język programowania zapewniający statyczne typowanie.
- **Next.js 15** (App Router) – framework React do tworzenia aplikacji webowych.
- **React** – biblioteka do tworzenia interfejsów użytkownika.
- **Material-UI (MUI)** – biblioteka gotowych komponentów UI dla React.
- **SyntaxHighlighter** – do wyświetlania kodu źródłowego z kolorowaniem składni.
- **Tailwind** (opcjonalnie, jeśli w projekcie również wykorzystywany jest styling TailwindCSS).

---

## Funkcjonalności

1. **Wprowadzenie kwoty w pensach**
    - Obsługa liczb całkowitych (np. `100`) oraz wartości w formacie `x.25`, `x.5`, `x.75`.
    - Walidacja – w razie nieprawidłowej liczby wyświetlane jest ostrzeżenie i blokada przycisku „Oblicz”.

2. **Wyliczenie minimalnej liczby monet**
    - Wywołanie algorytmu *coin change* w wariancie **unbounded** (można korzystać wielokrotnie z tego samego nominału).
    - Uwzględnienie półpensówek (0.5 pensa) i ćwiartek (0.25 pensa).

3. **Prezentacja wyniku**
    - Wyświetlanie, ile sztuk każdego nominału należy użyć (Gwinea, Funt, Korona, Szyling, Pens, Półpensówka, Ćwiartka).
    - Informacja o łącznej liczbie monet.

4. **Wyświetlanie kodu rozwiązania**
    - Część aplikacji pokazuje snippet z implementacją algorytmu (bez komentarzy).
    - Drugi snippet zawiera komentarze opisujące kolejne kroki.

---

## Autor

**Piotr Urbaniak** 


