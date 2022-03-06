import { Component } from "react";
import TodoItem from "./TodoItem";


class Todo extends Component {
   constructor(props) {
      super(props);
      this.state = {
         value: "",
         list: ['listen to music', 'working in office'],
         currentUser: "1"
      };
      this.addTodo = this.addTodo.bind(this);
   }

   harryTodos() {
      fetch('/json/todo.json')
         .then(response => response.json())
         .then(data => {
            const todos = data.map (item => item.todo)
            this.setState({list: [...todos]})
         })
   }
   
   farbodTodos() {
      fetch('/json/todo_farbod.json')
         .then(response => response.json())
         .then(data => {
            const todos = data.map (item => item.todo)
            this.setState({list: [...todos]})
         })
   }

   componentDidUpdate() {
      if (this.props.user == '1') {
         this.harryTodos()
      } else {
         this.farbodTodos()
      }
   }

   addTodo() {
      this.setState({
         list: [this.state.value, ...this.state.list],
         value: " ",
      });
   }


   change = e => {
      this.setState({value: e.target.value})
   } 

   removeTodo(todoIndex) {
      let list = this.state.list.filter((item, index) => index !== todoIndex)
      this.setState({list: list})
   }

   render() {
      return (
         <ul className="todo-list">
            <li>
               <input
                  type="text"
                  value={this.state.value}
                  onChange={this.change}
               />
               <button onClick={this.addTodo}>add</button>
            </li>
            {this.state.list.map((todo, i) => <TodoItem className="todo-list__items"
               index = {i+1}
               title = {todo}
               remove = {()=>this.removeTodo(i)}
            />)}
         </ul>
      );
   }
}
export default Todo;
