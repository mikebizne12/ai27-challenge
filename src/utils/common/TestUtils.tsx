import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import store from 'src/redux/store';
interface IExtendedRenderOptions extends RenderOptions {
  withRedux?: boolean;
  mockInitialState?: any;
}

const wrapInRedux = (
  componentTree: JSX.Element,
  { mockInitialState }: IExtendedRenderOptions
) => {
  const storeConfig = configureMockStore([]);
  const storeMock = mockInitialState ? storeConfig(mockInitialState) : store;
  return <Provider store={storeMock}>{componentTree}</Provider>;
};

const wrapInRouter = (componentTree: JSX.Element) => {
  return <BrowserRouter>{componentTree}</BrowserRouter>;
};

const setupComponent = (
  ui: JSX.Element,
  renderOptions?: IExtendedRenderOptions
) => {
  let componentTree = <>{ui}</>;
  if (renderOptions?.withRedux) {
    componentTree = wrapInRedux(componentTree, renderOptions);
  }
  componentTree = wrapInRouter(componentTree);
  return componentTree;
};

const customRender = (
  ui: JSX.Element,
  renderOptions?: IExtendedRenderOptions
) => {
  const componentTree = setupComponent(ui, renderOptions);
  return render(componentTree);
};

export * from '@testing-library/react';
export { customRender };
