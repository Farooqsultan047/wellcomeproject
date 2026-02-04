import {useState} from "react";
import "./App.css";
function App() {
  const [text, setText] = useState("💝Welcome Sir Usman💗");
  return (
    <div className="App">
      <h1>{text}</h1>
      <header className="App-header">
        <h3>Welcome to My React App</h3>
        <p>This is a simple React application.</p>
        <button onClick={() => setText("💝Welcome to Our Project, Sir Usman💗")}>
          clicked me
        </button>
      </header>
    </div>
  );
}

export default App;