import React from 'react';
import "./node.css"

const Grid = () =>{
  const getGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++){
        currentRow.push(col)
      }
      grid.push(currentRow)
    }
    return grid;
  }
  const grid = getGrid();
  return(
    <div class="p-3">
      <div class= "border border-dark">
      {grid.map((row, rowIndex) => {
        return (
          <span class="node-row overflow-hidden" key={rowIndex}>
            {row.map((col, colIndex) => {
              return(
                <div class="border border-dark node" key={colIndex}>
                  
                </div>
              )
            })}
          </span>
          )
        })}
        </div>
    </div>
  )
}

export default Grid;
