/*tic toc game using react*/
//create component called shoppingList
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
}
//pass data from board to square using props
class Board extends React.Component{
    //pass prop as a value
    renderSquare(i){
return<square value={i}/>
    }

}