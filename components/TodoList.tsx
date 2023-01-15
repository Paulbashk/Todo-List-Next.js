import { ITodo } from "../model/ITodo";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: ITodo[]
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className='w-[800px] mx-auto pb-[60px]'>
      <h2 className="text-center text-[32px] font-bold mb-[32px]">Список задач</h2>
      {todos.map(todo => (<TodoItem key={todo.id} todo={todo} />))}
    </div>
  );
} 