import React from "react";
import Card from "./Card";
import Board from "./Board";

const DragandDrop = () => {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p> Card one</p>
          </Card>
          <Card id="card-1" className="card" draggable="true">
            <p> Card two</p>
          </Card>
          <Card id="card-1" className="card" draggable="true">
            <p> Card three</p>
          </Card>
        </Board>
        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p> Card four</p>
          </Card>
        </Board>
      </main>
    </div>
  );
};

export default DragandDrop;
