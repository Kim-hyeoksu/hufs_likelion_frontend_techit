import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log('bye :(');
  }
  function hiFn() {
    console.log('created :)');
    return byFn;
  }
  useEffect(()=>{
    console.log('hi');
    return () => console.log('bye');
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  const onClickShowing = () => setShowing(prev => !prev);
  console.log('all the time')
  useEffect(() => {
    console.log('only one')
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log('search for', keyword);
    }
  }, [keyword]);
  return (
    <div className="App">
      <input 
      value={keyword} 
      onChange={onChange} 
      type="text" 
      placeholder="Search here,,"/>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"counter"} onClick={onClick}/>
      <div>
        {showing ? <Hello/> : null}
        <button onClick={onClickShowing}>{showing ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}

export default App;
