/*tic toc game using react*/
//create component called shoppingList
/*
class shoppingList extends React.Component{
    render(){
        return(
            //description to display 
<div className="shopping-list">
<h1>shoppping list {this.props.name}</h1>
<ul>
    <li>Instegram</li>
    <li>whatsapp</li>
    <li>facebook</li>
</ul>
</div>

        );
    }
}*/
//pass data from board to square using props
class Board extends React.Component{
    //pass prop as a value
    renderSquare(i){
return<square value={i}/>
    }
render(){
        const status='Next Player:X'
        return(
            <div>
                <div className='status'>{letstatus}</div>
                <div className='board-row'>
                    {/* call square method */}
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {/* call square method */}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {/* call square method */}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        )
    }

}
class square extends React.Component{
    render(){
        return(
            <button className="square">{this.props.value}

            </button>
        )
    }
}

}
