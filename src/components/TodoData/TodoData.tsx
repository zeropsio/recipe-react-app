import useGetTodos from '../../hooks/useGetTodos';
import { ZsTodos } from '@zerops/zestrat-react';
import { Todo } from '@zerops/zestrat-models';
import useAddTodo from '../../hooks/useAddTodo';
import useDeleteTodo from '../../hooks/useDeleteTodo';
import useUpdateTodo from '../../hooks/useUpdateTodo';

export const TodoData = () => {

  const { data: todos, refetch: getTodos } = useGetTodos();

  const addTodo = useAddTodo();
  const removeTodo = useDeleteTodo();
  const updateTodo = useUpdateTodo();

  const handleAdd = (text: string): void => {
    addTodo.mutate(
      { text },
      { onSuccess: () => getTodos() }
    );
  };

  const handleUpdate = (id: any, data: Partial<Todo>): void => {
    updateTodo.mutate(
      { id, ...data },
      { onSuccess: () => getTodos() }
    )
  };

  const handleRemove = (id: any): void => {
    removeTodo.mutate(id, {
      onSuccess: () => getTodos()
    })
  };

  return (
    <ZsTodos data={todos} handleAdd={handleAdd} handleRemove={handleRemove} handleUpdate={handleUpdate} />
  )
};

export default TodoData;
