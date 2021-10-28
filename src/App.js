import "./App.css";
import Counter from "./Counter";


const array = [
  {
    appName: "Counter 1",
    initialValue: 200
  },
  {
    appName: "Counter 6",
    initialValue: 0
  },
  {
    appName: "Counter 3",
    initialValue: 100
  },
  {
    appName: "Counter 15",
    initialValue: 100
  }
];

const App = () => {

  const countersOnDom = () => {
    return array.map((counter, i) => <Counter key={i} appName={counter.appName} initialValue={counter.initialValue}/>)
  }


  return (
    <>
    {countersOnDom()}
    </>
  )
};

export default App;
