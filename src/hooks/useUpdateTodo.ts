import { Todo } from '@zerops/zestrat-models';
import axios from 'axios';
import { useMutation } from 'react-query';

const useUpdateTodo = () => {
  return useMutation(({ id, completed, text }: Partial<Todo>) => axios.patch(
    `${process.env.REACT_APP_API_ENDPOINT}/todos/${id}`,
    { completed, text },
  ).then(({ data }) => data));
}

export default useUpdateTodo;
