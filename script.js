const container = document.querySelector('.container');
addRow();






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