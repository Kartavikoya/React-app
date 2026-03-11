import { useState } from "react";

// props component with increment behavior
const AddButton = ({ count, setCount }) => {
  // log received props for visibility
  console.log('AddButton props:', { count, setCount });

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <button onClick={handleClick}>
      Add ({count})
    </button>
  );
};

function Props() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <AddButton count={count} setCount={setCount} />
    </div>
  );
}

export default Props;
