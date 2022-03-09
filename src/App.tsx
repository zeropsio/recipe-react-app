import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Recipe } from '@zerops/zestrat-models';
import { ZsRecipeInfo } from '@zerops/zestrat-react';
import TodoData from './components/TodoData/TodoData';

const queryClient = new QueryClient()

const App: React.FC = () => {

  const recipe: Recipe = JSON.parse(process.env.REACT_APP_RECIPE_CONFIG || '{}');

  return (<div className="zs-recipe">

    <div className="zs-recipe-context">

      <ZsRecipeInfo intro={recipe.intro} desc={recipe.description} />

      <QueryClientProvider client={queryClient}>
        <TodoData />
      </QueryClientProvider>

    </div>

    <div className="zs-recipe-diagram">
      <z-project-diagram services={JSON.stringify(recipe?.services)}></z-project-diagram>
    </div>

  </div>)
};

export default App;
