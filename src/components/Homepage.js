import React from 'react'

const Homepage = () => {

  return (
    <div>
      <main>
        <div id='main__background' onClick={addProject}></div>
        <div id='homepage__projects'>
        </div>
      </main>
    </div>
  )
}

function addProject() {
  const container = document.querySelector('#homepage__projects');

  const proj = document.createElement('div');
  const coloredDiv = document.createElement('div');

  proj.classList.add('homepage__projects__project');

  const side = 100 + Math.random() * 300;
  proj.style.width = side + 'px';
  proj.style.height = side + 'px';

  const x = Math.random() * (container.offsetWidth-side);
  const y = Math.random() * (container.offsetHeight-side);
  proj.style.left = x + 'px';
  proj.style.top = y + 'px';

  proj.style.clipPath = getClipPath();

  proj.style.backgroundImage = 'url(' + getImage() + ')';

  coloredDiv.style.backgroundColor = getBackgroundColor();

  proj.append(coloredDiv);
  dragElement(proj);
  container.append(proj);
}

function getClipPath() {
  const clipPathOptions = [
    'polygon(50% 0%, 0% 100%, 100% 100%)',
    'circle(50% at 50% 50%)',
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
    'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
    'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
  ]

  return clipPathOptions[Math.floor(Math.random()*clipPathOptions.length)];
}

function getBackgroundColor() {
  const colors = [
    '#f53d4c',
    '#4ce59f',
    '#474AEB'
  ]

  return colors[Math.floor(Math.random()*colors.length)];
}

function getImage(){ //TO-DO
  return 'https://via.placeholder.com/150';
}

function projectsSetZIndex(){
  document.querySelectorAll('.homepage__projects__project').forEach(element => {
    element.style.zIndex='0';
    console.log(element);
  });
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    projectsSetZIndex();
    elmnt.style.zIndex = '1';
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export default Homepage
