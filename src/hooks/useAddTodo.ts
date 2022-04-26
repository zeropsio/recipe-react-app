import { Recipe, Todo } from '@zerops/zestrat-models';
import axios from 'axios';
import { useMutation } from 'react-query';

const useAddTodo = () => {
  const recipeConfig: Recipe = JSON.parse(process.env.REACT_APP_RECIPE_CONFIG as string);
  const apiEndpoint = `${recipeConfig.apiEndpoint}/todos`;

  return useMutation(({ text, completed }: Partial<Todo>) => axios.post(
    apiEndpoint,
    { text, completed },
  ).then(({ data }) => data));
};

export default useAddTodo;
