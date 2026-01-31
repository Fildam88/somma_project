document.getElementById("btnReset")?.addEventListener("click", () => {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("res").textContent = "-";
});

document.getElementById("btn").addEventListener("click", async () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);

  const r = await fetch(`/api/Somma?a=${a}&b=${b}`);
  const data = await r.json();

  document.getElementById("res").textContent = data.risultato;
});
//Sottrazione
document.getElementById("btn1").addEventListener("click", async () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);

  const r = await fetch(`/api/Sottrazione?a=${a}&b=${b}`);
  const data = await r.json();

  document.getElementById("res").textContent = data.risultato;
});
//Moltplicazione

document.getElementById("btnMoltiplicazione").addEventListener("click", async () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);

  const r = await fetch(`/api/Moltiplicazione?a=${a}&b=${b}`);
  const data = await r.json();

  document.getElementById("res").textContent = data.risultato;
});
//Divisione

document.getElementById("btnDivisione").addEventListener("click", async () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);

  const r = await fetch(`/api/Divisione?a=${a}&b=${b}`);
  const data = await r.json();

  document.getElementById("res").textContent = data.risultato;
});

//radice quadra A

document.getElementById("btnRadiceQuadraA").addEventListener("click", async () => {
  const a = Number(document.getElementById("a").value);
  

  const r = await fetch(`/api/RadiceQuadraA?a=${a}`);
  const data = await r.json();

  document.getElementById("res").textContent = data.risultato;

});



//radice quadra B

document.getElementById("btnRadiceQuadraB").addEventListener("click", async () => {
  const b = Number(document.getElementById("b").value);
  

  const r = await fetch(`/api/RadiceQuadraA?a=${b}`);
  const data = await r.json();

  document.getElementById("res").textContent = data.risultato;

});



//Sin A

document.getElementById("btnSinA").addEventListener("click", async () => {
  const a = Number(document.getElementById("a").value);
  

  const r = await fetch(`/api/SinA?a=${a}`);
  const data = await r.json();

  document.getElementById("res").textContent = data.risultato;

});


//Sin B

document.getElementById("btnSinB").addEventListener("click", async () => {
  const b = Number(document.getElementById("b").value);
  

  const r = await fetch(`/api/SinB?a=${b}`);
  const data = await r.json();

  document.getElementById("res").textContent = data.risultato;

});


["a", "b"].forEach(id => {
  const input = document.getElementById(id);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.activeElement.blur();
    }
  });
});