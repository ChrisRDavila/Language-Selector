//UI Logic
window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    hideResults();
    results();
    })
  })    

function hideResults () {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("swift").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  document.getElementById("go").setAttribute("class", "hidden");
  document.getElementById("c##").setAttribute("class", "hidden");
}
 
//Business Logic

function results() {
  const qSnake = parseInt(document.querySelector("input[name=snake]:checked").value);
  const  qGem= parseInt(document.querySelector("input[name=gem]:checked").value);
  const qFast = parseInt(document.querySelector("input[name=fast]:checked").value);
  const qOxy = parseInt(document.querySelector("input[name=oxy]:checked").value);
  const qGreen = parseInt(document.querySelector("input[name=green]:checked").value);
  document.querySelector("form").removeEventListener("submit", results);

  if (qSnake && qGem && qFast && qOxy && qGreen);
}

