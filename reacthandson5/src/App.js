import logo from './logo.svg';
import './App.css';
import ProductList from './Component/ProductList';
import Pure from './Component/Pure';


function App() {
  return (
    <div className="App">
      <h1>Ques1: Higher order component</h1>
      <p style={{backgroundColor:"yellow",width:"800px",margin:"auto"}}>Higher order component is a function which takes a wrapped Component as  an input argument and return a new enhanced component</p>
      <pre>
        syntax:const enhancedComponent = higherOrderComponent(originalComponent);
      </pre>
      <h3>Implemetation:Example-search functionality</h3>
      <ProductList /><br></br><br></br>
      <h1>Ques2: React Pure Component</h1>
      <p style={{backgroundColor:"yellow",width:"800px",margin:"auto"}}>
        React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate().<br></br>
        A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components.
      </p>
      <h3>Implemetation: state update</h3>
      <Pure />
    </div>
  );
}

export default App;
