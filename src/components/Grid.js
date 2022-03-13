import React from 'react';
import "./node.css"

const Grid = () =>{
  const getGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 30; col++){
        currentRow.push(col)
      }
      grid.push(currentRow)
    }
    return grid;
  }
  const grid = getGrid();
  return(
    <div class='container border border-dark'>
      {grid.map((row, rowIndex) => {
        return (
          <div class="row" key={rowIndex}>
            {row.map((col, colIndex) => {
              return(
                <div class="col border border-dark node">
                  
                </div>
              )
            })}
          </div>
          )
        })}
    </div>
  )
}

export default Grid;
