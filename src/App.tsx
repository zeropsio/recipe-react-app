import React, { useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Recipe } from '@zerops/zestrat-models';
import { ZsRecipeInfo } from '@zerops/zestrat-react';
import TodoData from './components/TodoData/TodoData';

const queryClient = new QueryClient()

const App: React.FC = () => {

  const zeropsRecipeConfig: Recipe = JSON.parse(process.env.REACT_APP_RECIPE_CONFIG as string);

  const zProjectDiagramElRef = useRef<any>(null);

  const onAdd = () => {
    zProjectDiagramElRef.current.simulatePost(`${zeropsRecipeConfig.apiEndpoint}/todos`, ['db']);
  };

  const onUpdate = () => {
    zProjectDiagramElRef.current.simulatePatch(`${zeropsRecipeConfig.apiEndpoint}/todos`, ['db']);
  };

  const onRemove = () => {
    zProjectDiagramElRef.current.simulateDelete(`${zeropsRecipeConfig.apiEndpoint}/todos`, ['db']);
  };

  useEffect(() => {
    zProjectDiagramElRef.current.simulateGet(zeropsRecipeConfig.guiEndpoint);
    zProjectDiagramElRef.current.simulateGet(`${zeropsRecipeConfig.apiEndpoint}/todos`, ['db']);
  }, [ zProjectDiagramElRef, zeropsRecipeConfig ]);

  return (<div>

    <div className="zs-app">
      <ZsRecipeInfo
        intro={zeropsRecipeConfig.intro}
        desc={zeropsRecipeConfig.description}
        knowledgeBaseLink={zeropsRecipeConfig.knowledgeBaseLink}
      />

      {<QueryClientProvider client={queryClient}>
        <TodoData onAdd={onAdd} onUpdate={onUpdate} onRemove={onRemove} />
      </QueryClientProvider>}
    </div>

    <z-project-diagram
      ref={zProjectDiagramElRef}
      project-name={zeropsRecipeConfig?.projectName}
      services={JSON.stringify(zeropsRecipeConfig?.services)}>
    </z-project-diagram>

  </div>);
};

export default App;
