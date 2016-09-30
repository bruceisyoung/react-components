class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bold: false
    };
  }

  onListItemMouseEnter() {
    this.setState({
      bold: true
    });
  }

  onListItemMouseLeave() {
    this.setState({
      bold: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onListItemMouseEnter.bind(this)} onMouseLeave={this.onListItemMouseLeave.bind(this)}>{this.props.toBuy}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.toBuys.map(toBuy => 
      <GroceryListItem toBuy={toBuy}/>
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
    <h2>My Grocery List</h2>
    <GroceryList toBuys={['Milk', 'Banana']}/> 
  </div>
);// TODO


ReactDOM.render(<App />, document.getElementById('app'));
