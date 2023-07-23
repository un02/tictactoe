import React from 'react'
import Square from './Square'
import "./Board.css"

const Board = ({squares, onClick}) =>  {
    
   const renderSauqre = (i) => {
      return<Square value={squares[i]}
            onClick={()=>onClick(i)}
      />
   }

    return (
      <div className='board-wrapper'>
        <div className='board-row'>
          {renderSauqre(0)}
          {renderSauqre(1)}
          {renderSauqre(2)}
        </div>
        <div className='board-row'>
          {renderSauqre(3)}
          {renderSauqre(4)}
          {renderSauqre(5)}
        </div>
        <div className='board-row'>
          {renderSauqre(6)}
          {renderSauqre(7)}
          {renderSauqre(8)}
        </div>
      </div>
    ) 
}

export default Board