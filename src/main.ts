interface TodoForm{
  id: number,
  detail: string,
  completion: boolean,
  category: string,
  tags?: string[],
}

const toDoDetail = document.getElementById("todo-detail") as HTMLInputElement;

const TodoList:TodoForm[] = [];





