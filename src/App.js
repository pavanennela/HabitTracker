import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Habit Name</h1>
      <input
        className="input_fields"
        placeholder="Exercise,Meditation..."
      ></input>
      <h1 className="title">Frequency</h1>
      <input className="input_fields" placeholder="daily,week..."></input>
    </div>
  );
}
