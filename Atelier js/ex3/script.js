class Todo{
    constructor(name="", content=""){
        this.name=name;
        this.content = content;
    }

    createItem(){
        const li = document.createElement("li");
        li.innerHTML= `${this.name} : ${this.content}`;
        li.classList.add("list-group-item")
        return li;
    }
}

class TodoItems{
    todoItems = new Array();
    ol = document.querySelector("#todolist");
    constructor(){
        this.showTodoItems();
    }
    showTodoItems(){
        this.ol.innerHTML = "";
        this.todoItems.forEach((item) => {
            const newItem = item.createItem();
            const i = document.createElement("i");
            i.classList.add("fa");
            i.classList.add("fa-trash");
            i.addEventListener("click", () => {
                this.deletItem(item);
            });
            newItem.appendChild(i);
            this.ol.appendChild(newItem);
        });
    }
    addItem = (name ,content) => {
        const item = new Todo(name,content);
        this.todoItems.push(item);
        this.showTodoItems();
    };
    deletItem(item){
        this.todoItems = this.todoItems.filter((todo) => todo != item);
        this.showTodoItems();
    }
}

const items = new TodoItems();
const disableButton = (button,nameInp, contentInp ) => {
    button.disabled = true;
    if(nameInp.value.trim().length && contentInp.value.trim().length){
        button.disabled = false;
        return;
    }
};

const nameInp = document.querySelector("#name");
const contentInp = document.querySelector("#content");
const addButton = document.querySelector("button");
addButton.disabled = true;
nameInp.addEventListener("keyup",() => {
    disableButton(addButton,nameInp,contentInp);
});
contentInp.addEventListener("keyup",() => {
    disableButton(addButton,nameInp,contentInp);
});
addButton.addEventListener("click" , () => {
    items.addItem(nameInp.value, contentInp.value);
    addButton.disabled=true;
    nameInp.value="";
    contentInp.value="";
})