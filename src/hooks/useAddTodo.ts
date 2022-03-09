import { Todo } from '@zerops/zestrat-models';
import axios from 'axios';
import { useMutation } from 'react-query';

const useAddTodo = () => {
  return useMutation(({ text, completed }: Partial<Todo>) => axios.post(
    `${process.env.REACT_APP_API_ENDPOINT}/todos`,
    { text, completed },
  ).then(({ data }) => data));
};

export default useAddTodo;
