document.getElementById("btn").addEventListener("click", async () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);

  const r = await fetch(`/api/somma?a=${a}&b=${b}`);
  const data = await r.json();

  document.getElementById("res").textContent = data.risultato;
});