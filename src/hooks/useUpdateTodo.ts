import { Recipe, Todo } from '@zerops/zestrat-models';
import axios from 'axios';
import { useMutation } from 'react-query';

const useUpdateTodo = () => {
  const recipeConfig: Recipe = JSON.parse(process.env.REACT_APP_RECIPE_CONFIG as string);
  const apiEndpoint = `${recipeConfig.apiEndpoint}/todos`;

  return useMutation(({ id, completed, text }: Partial<Todo>) => axios.patch(
    `${apiEndpoint}/${id}`,
    { completed, text },
  ).then(({ data }) => data));
}

export default useUpdateTodo;
