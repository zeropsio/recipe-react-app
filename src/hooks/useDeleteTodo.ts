import { Recipe } from '@zerops/zestrat-models';
import axios from 'axios';
import { useMutation } from 'react-query';

const useDeleteTodo = () => {
  const recipeConfig: Recipe = JSON.parse(process.env.REACT_APP_RECIPE_CONFIG as string);
  const apiEndpoint = `${recipeConfig.apiEndpoint}/todos`;

  return useMutation(( id: string ) => axios.delete(
    `${apiEndpoint}/${id}`
  ).then(({ data }) => data));
};

export default useDeleteTodo;
