import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class ShoppingList extends React.Component {
    render() {
        return (
            <div className='shopping-list'>
                <h1>Shopping List for {this.props.name} </h1>
                <ul>
                    <li>Tim Cook</li>
                    <li>Steve Jobs</li>
                    <li>Ratan Tata</li>
                </ul>
            </div>
        )
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className="square" onClick={() => { console.log('click') }}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                    <ShoppingList />
                </div>
                <div className="game-info">
                    {/* <div>status</div> */}
                    {/* <ol> TODO </ol> */}
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
