import axios from 'axios';
import { useQuery } from 'react-query';

const useGetTodos = () => {
  return useQuery('todos', () => axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/todos`,
  ).then(({ data }) => data));
}

export default useGetTodos;
