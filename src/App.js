import './App.css';
// import callMe from './features/immutability';
// import callMe from './features/basic-redux-setup';
// import callMe from './features/multiple-reducers';
// import callMe from './features/middleware';
import { Counter } from './features/counter';

function App() {
  // callMe();

  return (
    <div className="App">
      <h1>Welcome To Redux Toolkit!</h1>
      <Counter />
    </div>
  );
}

export default App;
