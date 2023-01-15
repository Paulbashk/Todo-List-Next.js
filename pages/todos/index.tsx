import { NextPageContext } from 'next';
import { useEffect, useState } from 'react';
import {MainLayout} from '../../components/MainLayout';
import { TodoList } from '../../components/TodoList';
import { ITodo } from '../../model/ITodo';

interface TodosPageProps {
  todos: ITodo[] | null
}

export default function TodosPage({ todos: serverTodos }: TodosPageProps) {
  const [todos, setTodos] = useState(serverTodos);
  const titlePage = 'Список задач';

  const load = async () => {
    const response = await fetch(`${process.env.API_URL}/todos`);
    const json = await response.json();

    setTodos(json);
  }

  useEffect(() => {
    if(!serverTodos) {
      load();
    }
  }, []);

  return (
    <MainLayout title={titlePage}>
      { !todos ? <p className='text-xl text-center'>Список задач загружается...</p> : <TodoList todos={todos} /> }
    </MainLayout>
  );
}

TodosPage.getInitialProps = async ({ req }: NextPageContext) => {
  if(req) {
    return { todos: null }
  }

  const response = await fetch(`${process.env.API_URL}/todos`);
  const todos = await response.json();

  return {
    todos
  }
}