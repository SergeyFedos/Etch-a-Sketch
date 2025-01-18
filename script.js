  const container = document.querySelector('.container');
  addRow();
  changeColor();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function changeColor() {
  const allDivs = document.getElementsByClassName('column');
  for (let i = 0; i < allDivs.length; i++) { 
  

  allDivs[i].addEventListener('mouseover', function(){
    allDivs[i].style.backgroundColor = 'red';
  })
  allDivs[i].addEventListener('mouseout', function() {
    allDivs[i].style.backgroundColor = 'white';
  })}
}

  
































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