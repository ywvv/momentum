const todoBtn = document.querySelector('.todo-btn');
const todoTitle = document.querySelector('.todo-title');
const newTodo = document.querySelector('.todo-input');
const newTodoBtn = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');
const clearBtn = document.querySelector('.clear-btn');
const todoInner = document.querySelector('.todo-inner');
let showTodo = false;

todoBtn.addEventListener('click', () => {
    todoTitle.classList.add('todo-title2');
    if (showTodo == false) {
        todoTitle.classList.add('todo-title2');
        todoInner.classList.add('todo-inner-show');
        showTodo = true;
    } else {
        todoTitle.classList.remove('todo-title2');
        todoInner.classList.remove('todo-inner-show');
        showTodo = false;
    }
})

newTodoBtn.addEventListener('click', () => {
    if (newTodo.value.length > 0) {
        createTodoItem(newTodo.value);
    }
})

const listenDeleteTodo = (element) => {
    element.addEventListener("click", (event) => {
        element.parentElement.remove();
        event.stopPropagation();
    });
}

const createTodoItem = (value) => {
    const li = document.createElement('li');
    li.textContent = value;

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    li.prepend(input);

    const btn = document.createElement('button');
    btn.classList.add('delete-icons')
    li.append(btn);

    todoList.append(li);
    newTodo.value = '';
    listenDeleteTodo(btn);
}

clearBtn.addEventListener('click', () => {
    todoList.textContent = '';
})

newTodo.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter && newTodo.value.length > 0) {
        createTodoItem(newTodo.value)
    }
});

const onClickTodo = (evt) => {
    if (evt.target.checked) {
        evt.target.parentElement.classList.add('checked');
    } else {
        evt.target.parentElement.classList.remove('checked');
    }
}

todoList.addEventListener("click", onClickTodo);