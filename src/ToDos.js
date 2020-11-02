import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import { Badge, Form } from "react-bootstrap";

class ToDos extends Component{
    constructor() {
        super();
        this.state = {
            newTodo: '',
            todos: [],
            completedTodos: []
        }
    }
    
    handleChange = (event) => {
        this.setState({newTodo: event.target.value})
    };

    addTask  = (event) => {
        event.preventDefault();
        const todos = this.state.todos;
        this.setState({
            newTodo: '',
            todos: todos.concat(this.state.newTodo)
        })
    }

    removeLi = (index) => {
        // take a copy of the todos array and store it in new var todo
        const todos = [...this.state.todos];
        todos.splice(index, 1);
        this.setState({
            todos: todos
        })
    }
    removeCompletedLi = (index) => {
        const completedTodos = [...this.state.completedTodos];
        completedTodos.splice(index, 1);
        this.setState({
            completedTodos: completedTodos
        })
    }

    completedLi = (index) => {
        const todos = [...this.state.todos];
        const completed = this.state.completedTodos.concat(todos.splice(index, 1));
        this.setState({
            todos: todos,
            completedTodos: completed
        })
    }

    notCompletedLi = (index) => {
        const completed = [...this.state.completedTodos];
        const newTodo = this.state.todos.concat(completed.splice(index, 1));
        this.setState({
            todos: newTodo,
            completedTodos: completed
        })
    }
    
    render() {
        const todoList = this.state.todos;
        const completedTodos = this.state.completedTodos;
        return (
            <div>
                <h4>Yet another Todo List</h4><br/>
                <Form.Group>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1" onChange={this.handleChange} value={this.state.newTodo}>New Task</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Do something amazing"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        type="text"
                        value={this.state.newTodo}
                        onChange={this.handleChange}
                    />
                    <Button variant="primary" type="submit" onClick={this.addTask}>Add</Button>
                    </InputGroup>
                    {/* <button type="submit">Add Task</button> */}
                    
                </Form.Group>

                {todoList.length > 0 ? <div><h4 className="mt-5"><Badge variant="info">My Tasks</Badge></h4><br/><hr/></div> : ''}
                <ul>
                    {todoList.map((indTodo, index) => {
                        return <li className="m-5" key={index}>
                            {indTodo}
                            <Button className="ml-5" variant="success" onClick={()=>{this.completedLi(index)}}>Done</Button>
                            <Button className="ml-1" variant="danger" onClick={()=>{this.removeLi(index)}}>Remove</Button>
                        </li>
                    })}
                </ul>

                {completedTodos.length > 0 ? <div><h4 className="mt-5"><Badge variant="success">Completed Tasks</Badge></h4><br/><hr/></div> : ''}
                <ul>
                    {completedTodos.map((indTodo, index) => {
                        return <li className="m-5" key={index}>
                            <strike>{indTodo}</strike>
                            <Button className="ml-5" variant="warning" onClick={()=>{this.notCompletedLi(index)}}>NotDone</Button>
                            <Button className="ml-1" variant="danger" onClick={()=>{this.removeCompletedLi(index)}}>Remove</Button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}


export default ToDos;