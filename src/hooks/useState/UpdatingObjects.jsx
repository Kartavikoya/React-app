import { useState } from "react";

function Obj(){
  const [serach, setSearch] = useState();

  const OnSearchChange = (event) =>{
    setSearch(event.target.value)
  }

  return (
    <>
    <input onChange={OnSearchChange} placeholder="something..." />
    <p>{serach}</p>
    </>
  );
}

export default Obj;