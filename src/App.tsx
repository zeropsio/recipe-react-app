import React, { useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Recipe } from '@zerops/zestrat-models';
import { ZsRecipeInfo } from '@zerops/zestrat-react';
import TodoData from './components/TodoData/TodoData';

const queryClient = new QueryClient()

const App: React.FC = () => {

  const recipe: Recipe = JSON.parse(process.env.REACT_APP_RECIPE_CONFIG as string);

  const zProjectDiagramElRef = useRef<any>(null);

  const onAdd = () => {
    zProjectDiagramElRef.current.simulatePost(`${recipe.apiEndpoint}/todos`, ['db']);
  };

  const onUpdate = () => {
    zProjectDiagramElRef.current.simulatePatch(`${recipe.apiEndpoint}/todos`, ['db']);
  };

  const onRemove = () => {
    zProjectDiagramElRef.current.simulateDelete(`${recipe.apiEndpoint}/todos`, ['db']);
  };

  useEffect(() => {
    zProjectDiagramElRef.current.simulateGet(recipe.guiEndpoint);
    zProjectDiagramElRef.current.simulateGet(`${recipe.apiEndpoint}/todos`, ['db']);
  }, [ zProjectDiagramElRef, recipe ]);

  return (<div>

    <div className="zs-app">
      <ZsRecipeInfo
        intro={recipe.intro}
        desc={recipe.description}
      />

      <QueryClientProvider client={queryClient}>
        <TodoData onAdd={onAdd} onUpdate={onUpdate} onRemove={onRemove} />
      </QueryClientProvider>
    </div>

    <z-project-diagram ref={zProjectDiagramElRef} project-name={recipe?.projectName} services={JSON.stringify(recipe?.services)}></z-project-diagram>

  </div>);
};

export default App;
