import { useState } from 'react';

// Example 1: Simple Counter
export function Counter() {
  // useState returns [current value, function to update value]
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Example 2: Text Input
export function TextInput() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClear = () => {
    setName('');
  };

  return (
    <div>
      <h2>Text Input Example</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <p>Hello, {name || 'Guest'}!</p>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

// Example 3: Multiple State Variables
export function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${firstName} ${lastName}, Age: ${age}`);
    // Reset form
    setFirstName('');
    setLastName('');
    setAge('');
  };

  return (
    <div>
      <h2>User Form Example</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Example 4: Toggle State (Boolean)
export function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h2>Toggle Example</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && (
        <p>This content is now visible!</p>
      )}
    </div>
  );
}

// Example 5: Array State
export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List Example</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main component combining all examples
export default function UseStateExamples() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>useState Hook Examples</h1>
      <Counter />
      <hr />
      <TextInput />
      <hr />
      <UserForm />
      <hr />
      <Toggle />
      <hr />
      <TodoList />
    </div>
  );
}
