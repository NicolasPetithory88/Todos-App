import React from "react";

//! Class based component
class TodoItem extends React.Component {
    render() {
        return <li>{this.props.todo.title}</li>
      }
}

//! Function based component (possible cause this component doesnt hold any data, data is held by TodoContainerComponent)
// function TodoItem(props) {
//     return <li>{props.todo.title}</li>
//   }
  
export default TodoItem