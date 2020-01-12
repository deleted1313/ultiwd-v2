const calculator_1 = () => {
  const p1 = Number(document.querySelector("#price_1").value);
  const p2 = Number(document.querySelector("#price_2").value);
  const p3 = Number(document.querySelector("#price_3").value);
  const p4 = Number(document.querySelector(".default-switch_price_4").value="");
  p4.checked ? alert("da"): alert("nno");
  const all_price = p1 + p2 + p3 + p4;
  document.querySelector("#end_price").innerHTML = all_price;
};

document
  .querySelectorAll("#input_block input")
  .forEach(e => e.addEventListener("change", calculator_1));
