const Hello = () => <div>Hello</div>;

const App = () => (
  <div>
    <Hello />
  </div>
);

const render = () => ReactDOM.render(<App />, document.getElementById("app"));
render();
