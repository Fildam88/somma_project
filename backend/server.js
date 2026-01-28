const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Serve i file frontend dalla cartella "public"
app.use(express.static(path.join(__dirname, "public")));

// API: POST /sum  { "a": 2, "b": 3 }  -> { "result": 5 }

app.get("/api/somma", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ errore: "a e b devono essere numeri" });
  }

  res.json({ risultato: a + b });
});


// Home page (opzionale, ma comodo)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// PORT per Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));