# **The Todo List to Rule them All** <!-- omit in toc -->

Think you have seen a Todo List app...well think again!

- [**General**](#general)
- [**How it works**](#how-it-works)
- [**How to Use**](#how-to-use)
- [**Requirements**](#requirements)
- [**What I Learned**](#what-i-learned)
- [**Still Todo**](#still-todo)

## **General**

This Todo List Project was built using the following technologies and libraries:

<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>




## **How it works**

The Todo List app uses React components, states, and forms to manipulate the DOM depending on the users input.

```JavaScript
    addTask  = (event) => {
        event.preventDefault();
        const todos = this.state.todos;
        this.setState({
            newTodo: '',
            todos: todos.concat(this.state.newTodo)
        })
    }
```
```JSX
    <Button variant="primary" type="submit" onClick={this.addTask}>Add</Button>
```

## **How to Use**
1. Add new todo items by typing them into the text box and then clicking add.
   * Users can add as many items as they would like.
2. After adding a new Item, the todo will show under the badge that reads, My Tasks.
3. You will notice there are two buttons that accompany the task.
4. The first button is the done button. The second is the remove button.
5. Once a user completes a taks, they can select the done button corresponding to that task. 
6. When it is clicked, the task will be moved from the my task list to the completed tasks list. Furthermore, the task will appear with a line through it...or striked out.
7. The user can move a striked out or completed task back to the uncompleted tasks by clicking the orange notdone button that took the done buttons place.
8. At any point, the user can select the remove button next to a task to get rid of the task completely.
<img src="./how_to.gif"/>

## **Requirements**
The Requirements for this exercise were as follows: 
* Implement a todo list app using our React and React-form knowledge


## **What I Learned**
I learned some valuable lessons throughout this exercise. These included:
* The differences between syntaxs of React-bootstrap forms vs. regular forms.
* Array.prototype.push() mutates the array in-place, i.e. if you do not use the [...]  (the spread operator) syntax when making a copy of the array, you must then use the .concat() method instead.
  * The [concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
* Methods with arguments in the call must be surrounded by anonymous arrow functions.
```JSX 
    <Button className="ml-1" variant="danger" onClick={()=>{this.removeLi(index)}}>Remove</Button> 
```
  * Has to do with binding the "this" keyword so we can use the keyword in the function. 
  * We could also accomplish it like this: 
```JSX 
    <Button className="ml-1" variant="danger" onClick={()=>{this.removeLi.bind(this, index)}}>Remove</Button> 
```

## **Still Todo**
* Refactor solution to make DRYer.
* Make the a specific todo a component.
* Instead of having two lists, one for completed and one for uncompleted on the state, make it a list of objects...This will help with:
  * Decreasing the number of methods
  * The ability to pass states and functions as props to other components.