const express = require("express");

const app = express();
app.use(express.json());

// HOME PAGE (GET /)
app.get("/", (req, res) => {
  res.type("html").send(`
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Somma</title>
    <style>
      body { font-family: Arial; padding: 50px; }
      input { width: 80px; padding: 60px; }
      button { padding: 60px 112px; }
    </style>
  </head>
  <body>
    <h1>Somma Damianz</h1>

    <input id="a" placeholder="inserisci a" />
    <span> + </span>
    <input id=" b" placeholder="inserisci b  " />
    <button id="btn">Somma</button>

    <p id="out"></p>

    <script>
      const out = document.getElementById("out");
      document.getElementById("btn").addEventListener("click", async () => {
        const a = document.getElementById("a").value;
        const b = document.getElementById("b").value;

        const r = await fetch("/sum", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ a, b })
        });

        const data = await r.json();
        out.textContent = r.ok ? ("Risultato: " + data.result) : ("Errore: " + (data.error || "input non valido"));
      });
    </script>
  </body>
</html>
  `);
});

// API (POST /sum)
app.post("/sum", (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ error: "Input non valido" });
  }

  res.json({ result: a + b });
});

app.listen(3001, () => {
  console.log("Server avviato su http://localhost:3001");
});