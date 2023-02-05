/** To-do List Type interface */
interface TodoForm{
  id: number,
  detail: string,
  completion: boolean,
  category: string,
  tags?: string[],
}

/** To-do List Category input */
const toDoCategory = document.getElementById("todo-category") as HTMLInputElement;
/** To-do List detail input */
const toDoDetail = document.getElementById("todo-detail") as HTMLInputElement;
/** To-do List save button */
const saveBtn = document.getElementById("todo-save") as HTMLButtonElement;
/** To-do List 객체 담는 배열 */
const TodoList:TodoForm[] = [];

saveBtn.addEventListener('click', handleToSubmit)

/** 저장버튼 클릭시 이벤트 함수 */
function handleToSubmit(e:{}) {
}
/** 투두리스트 그려주는 함수 */
function paintTodo() {
}



