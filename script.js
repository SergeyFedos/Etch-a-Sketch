    const container = document.querySelector('.container');
    addRow();
    changeColor();



    const btn = document.querySelector('button');
    btn.addEventListener('click', function() {
    let prom = window.prompt('Put you number between 0 - 99');
    prom = Number(prom);
    if (prom < 0|| prom >= 100 || isNaN(prom)) {alert('ERROR! You should put number between 0 - 99')}
    else {addRow2(prom);}
  
    
  
    })


  
    function addRow2(prom) {
    container.innerHTML = '';
    
    for(let i = 0; i < prom; i++) {
      rowAdd2(container, prom);
    }
    function rowAdd2 (container, prom) {
    const rowAdd = document.createElement('div');
    rowAdd.className = 'row';
  
    for (let i = 0; i < prom; i++) {
    const column = document.createElement('div');
    column.className = 'column';
    rowAdd.appendChild(column);
    }
    changeColor();

  container.appendChild(rowAdd);

  }
  }
  
  
  
  
  
  
  
  
  
  function changeColor() {
  const allDivs = document.querySelectorAll('.column');
  const randomColor = getRandomColor();
  for (let i = 0; i < allDivs.length; i++) { 
  allDivs[i].addEventListener('mouseover', function(){
    allDivs[i].style.backgroundColor = randomColor;
  })
 
  }}

  
  function addRow() {
  for(let i = 0; i < 16; i++) {
    row();
  }
  }

    function row () {
    const rowAdd = document.createElement('div');
    rowAdd.className = 'row';
  
    for (let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    column.className = 'column';
    rowAdd.appendChild(column);
    }

    container.appendChild(rowAdd);

    }
    function getRandomColor(){
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      return `rgb(${r}, ${g}, ${b})`;
    }