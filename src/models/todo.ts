class Todo{
    item: string;
    id: number;

    constructor(todoText: string){
        this.item = todoText;
        this.id = Math.floor(Math.random() * 10000);
    }
}

export default Todo;