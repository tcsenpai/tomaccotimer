# Tomacco Timer 🍅

Inverse Pomodoro. You start working, stop when done, and earn a break equal to a
fraction of the time you worked (default 1/5).

## Use directly (no notifications)

Open `index.html` in a browser. No build.

- **Start working** — timer counts up.
- **Stop & take break** — earns `worked ÷ ratio` of break, counts down, beeps at 0.
- **Ratio** — editable (5 = one fifth of worked time).
- **Reset** — abandon current work session.
- **Pop out** — floating always-on-top window (Document Picture-in-Picture). Chromium 116+ only, needs a server (https/localhost). Button hidden where unsupported.

## Run with server (allows notifications once break ends)

```sh
bun run server.js   # http://localhost:3000, PORT env optional
```

Any static server works too (`python3 -m http.server`).
