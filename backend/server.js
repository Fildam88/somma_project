const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Serve i file frontend dalla cartella "public"
app.use(express.static(path.join(__dirname, "public")));

// API: POST /sum  { "a": 2, "b": 3 }  -> { "result": 5 }

app.get("/api/Somma", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ errore: "a e b devono essere numeri" });
  }

  res.json({ risultato: a + b });
});
// API: POST /diffrz  { "a": 2, "b": 3 }  -> { "result": -1 }
app.get("/api/Sottrazione", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ errore: "a e b devono essere numeri" });
  }

  res.json({ risultato: a - b });
});
 // API: POST /multpl  { "a": 2, "b": 3 }  -> { "result": 6 }
app.get("/api/Moltiplicazione", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ errore: "a e b devono essere numeri" });
  }

  res.json({ risultato: a * b });
});
// API: POST /divsn  { "a": 2, "b": 3 }  -> { "result": 2/3 }

app.get("/api/Divisione", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ errore: "a e b devono essere numeri" });
  }

  res.json({ risultato: a / b });
});


// API: POST /radice quadra A  { "a":4 }  -> { "result": 2 }

app.get("/api/RadiceQuadraA", (req, res) => {
  const a = Number(req.query.a);
  

  if (!Number.isFinite(a)) {
    return res.status(400).json({ errore: "a e b devono essere numeri" });
  }

  res.json({ risultato: Math.sqrt(a) });
});



// API: POST /radice quadra B  { "a":4 }  -> { "result": 2 }

app.get("/api/RadiceQuadraA", (req, res) => {
  const b = Number(req.query.b);
  

  if (!Number.isFinite(b)) {
    return res.status(400).json({ errore: "a  devono essere numeri" });
  }

  res.json({ risultato: Math.sqrt(b) });
});


// API: POST /Sin (a) 

app.get("/api/SinA", (req, res) => {
  const a = Number(req.query.a);
  

  if (!Number.isFinite(a)) {
    return res.status(400).json({ errore: "a  devono essere numeri" });
  }

  res.json({ risultato: Math.sin(a* Math.PI / 180) });
});


// API: POST /Sin  (b)

app.get("/api/SinB", (req, res) => {
  const b = Number(req.query.b);
  

  if (!Number.isFinite(b)) {
    return res.status(400).json({ errore: "b  devono essere numeri" });
  }
  
    res.json({ risultato: Math.sin(b* Math.PI / 180) });
});



// API: POST /Sinh (a) 

app.get("/api/SinhA", (req, res) => {
  const a = Number(req.query.a);
  

  if (!Number.isFinite(a)) {
    return res.status(400).json({ errore: "a  devono essere numeri" });
  }

  res.json({ risultato: Math.sinh(a* Math.PI / 180) });
});


// API: POST /Sinh  (b)

app.get("/api/SinhB", (req, res) => {
  const b = Number(req.query.b);
  

  if (!Number.isFinite(b)) {
    return res.status(400).json({ errore: "b  devono essere numeri" });
  }
  
    res.json({ risultato: Math.sinh(b* Math.PI / 180) });
});


// API: POST /Cos (a) 

app.get("/api/CosA", (req, res) => {
  const a = Number(req.query.a);
  

  if (!Number.isFinite(a)) {
    return res.status(400).json({ errore: "a  devono essere numeri" });
  }

  res.json({ risultato: Math.cos(a* Math.PI / 180) });
});


// API: POST /Cos  (b)

app.get("/api/CosB", (req, res) => {
  const b = Number(req.query.b);
  

  if (!Number.isFinite(b)) {
    return res.status(400).json({ errore: "b  devono essere numeri" });
  }
  
    res.json({ risultato: Math.cos(b* Math.PI / 180)  });
});

// API: POST /Cosh (a) 

app.get("/api/CoshA", (req, res) => {
  const a = Number(req.query.a);
  

  if (!Number.isFinite(a)) {
    return res.status(400).json({ errore: "a  devono essere numeri" });
  }

  res.json({ risultato: Math.cosh(a* Math.PI / 180) });
});


// API: POST /Cosh  (b)

app.get("/api/CoshB", (req, res) => {
  const b = Number(req.query.b);
  

  if (!Number.isFinite(b)) {
    return res.status(400).json({ errore: "b  devono essere numeri" });
  }
  
    res.json({ risultato: Math.cosh(b* Math.PI / 180)  });
});












// Home page (opzionale, ma comodo)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// PORT per Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));