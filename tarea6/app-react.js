const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
const element = React.createElement('h1', null, 'Hola Mundo con React');
root.render(element);