import { Recipe } from '@zerops/zestrat-models';
import axios from 'axios';
import { useQuery } from 'react-query';

const useGetTodos = () => {
  const recipeConfig: Recipe = JSON.parse(process.env.REACT_APP_RECIPE_CONFIG as string);
  const apiEndpoint = `${recipeConfig.apiEndpoint}/todos`;

  return useQuery('todos', () => axios.get(
    apiEndpoint,
  ).then(({ data }) => data));
}

export default useGetTodos;
