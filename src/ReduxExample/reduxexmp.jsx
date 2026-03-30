import "../App.css";
import { Counter } from "../components/Counter";

function Exmpred() {
  return (
    <>
      <div className="App">
        <h1>React redux</h1>
         <Counter />
      </div>
    </>
  );
}

export default function Redu1() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* <h1>Use Context</h1> */}
      <Exmpred />
    </div>
  );
}
