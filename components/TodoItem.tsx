import Router from "next/router";
import { ITodo } from "../model/ITodo";
import { Checkbox } from "./Checkbox";

interface TodoItemProps {
  todo: ITodo
  link?: boolean
}

export const TodoItem = ({ todo, link = true }: TodoItemProps) => {

  return (
    <div className='flex w-full justify-center mb-[8px]'>
      <div className='flex items-center'>
        <h3 className='mr-[16px] text-[20px] hover:cursor-pointer' onClick={() => link && Router.push(`/todos/${todo.id}`)}>
          <span className='font-bold mr-[6px]'>
            {todo.id}.
          </span> 
          {todo.title}
        </h3>
        <Checkbox className='w-[20px] h-[20px] mt-[4px] hover:cursor-pointer' checked={todo.completed} />
      </div>
    </div>
  );
}