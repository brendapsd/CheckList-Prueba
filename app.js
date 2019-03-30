// const btnIngresar = document.getElementById('btn-ingresar'); 
// btnIngresar.addEventListener('click', )

// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = () => {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
const newElement = () => {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const inputValue1 = document.getElementById("myInput1").value;
  const t = document.createTextNode(`${inputValue} - ${inputValue1}`);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Es muy necesario que ingrese una tarea a realizar");
  } else if (inputValue1==='') {
    alert("Asigna a una persona para que la realicé");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  document.getElementById("myInput1").value = "";
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}