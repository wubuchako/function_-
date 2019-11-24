// 基本
function sayHello(person){
    console.log('hi', person);
}

sayHello("chiyomi")


// 情報の表示

var todos = ["item 1", "item 2", "item 3", "item 4"]

function displayTodos() {
    console.log("My todos: ", todos);
}

displayTodos()

// 情報の追加

function addTodo() {
    todos.push('new todo');
}

addTodo()
todos

function addTodo() {
    todos.push('new todo');
    displayTodos();
}

addTodo()

// 情報の変更
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();

}

changeTodo(0, "chiyomi")

// 情報の削除

function deleteTodo(position) {
 todos.splice(position, 1);
 displayTodo();
}

displayTodo()
