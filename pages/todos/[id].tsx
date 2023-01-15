import { NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { TodoItem } from "../../components/TodoItem";
import { ITodo } from "../../model/ITodo";

interface TheTodoPageProps {
  todo: ITodo;
}

export default function TheTodo({ todo: serverTodo }: TheTodoPageProps) {
  const [todo, setTodo] = useState(serverTodo);
  const { query } = useRouter();
  const id = query.id;
  const pageTitle = `Todo ${id}`;

  const load = async () => {
    const response = await fetch(`${process.env.API_URL}/todos/${query.id}`);
    const json = await response.json();

    setTodo(json);
  }

  useEffect(() => {
    if(!serverTodo) {
      load();
    }
  }, []);

  return (
    <MainLayout title={pageTitle}>
      <div className="mb-[24px]">
        { todo 
          ? <TodoItem todo={todo} link={false} /> 
          : <p className='text-xl text-center'>Список задач загружается...</p> 
        }
        </div>
      <div className="flex w-full justify-center">
        <Link href={'/todos'} className={'text-[18px] text-center text-underline font-bold hover:opacity-75 transition-opacity duration-300 ease-linear'}>Список задач</Link>
        </div>
    </MainLayout>
  );
}

interface TheTodoNextPageContent extends NextPageContext {
  query: {
    id: string
  }
}

TheTodo.getInititalProps = async ({ req, query }: TheTodoNextPageContent) => {
  if(!req) {
    return { todo: null }
  }

  const response = await fetch(`${process.env.API_URL}/todos/${query.id}`);
  const todo = await response.json();

  return { todo };
}