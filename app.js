
// // Original
// // React component
// var Bread = () => (
//   <li> bread </li>
// );
//
// // React component
// var Butter = () => (
//   <li> butter </li>
// );
//
// // Nested React components
// var GroceryList = () => (
//   <ul>
//    <Bread />               {/* instance of Bread  */}
//    <Butter />              {/* instance of Butter  */}
//   </ul>
//  );
//
// // Render GroceryList component into the DOM
// ReactDOM.render(<GroceryList />, document.getElementById("app"));



// // Refactor.1
// var GroceryList = (props) => (
//   <ul>
//     {GroceryListItem(props.items[0])}
//     {GroceryListItem(props.items[1])}
//   </ul>
// );

// var GroceryListItem = (content) => (
//   <li>{content}</li>
// );

// ReactDOM.render(<GroceryList items={['bread', 'butter']} />, document.getElementById("app"));


// // Refactor.2
// var GroceryList = (props) => (
//   <ul>
//     {props.items.map(current =>
//       <GroceryListItem item={current} />
//     )}
//   </ul>
// );

// class GroceryListItem extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//     <li>{this.props.item}</li>
//     );
//   }
// }

// ReactDOM.render(<GroceryList items={['bread', 'butter']} />, document.getElementById("app"));


// Refactor.3
var GroceryList = (props) => (
  <ul>
    {props.items.map(current =>
      <GroceryListItem item={current} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    // current state of compnent
    this.state = {
      done: false
    };
  }

  // re-render componenet when gets clicked
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // conditional style object literal for inline styling on clicked component
      // snake-cased css props become camelCased
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList items={['bread', 'butter']} />, document.getElementById("app"));





