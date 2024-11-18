import "./App.css";

function App() {
  return (
    <div className="App bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)] text-black">
      <header className="App-header ">
        <div className="log inline-flex bg-[#ffffff] h-64 w-96 content-center-center align-center">
          <input
            className="input border-black p-2"
            name="myinput"
            placeholder="Enter"
          ></input>
          <input
            className="input border-black p-2"
            name="myinput"
            placeholder="Enter"
          ></input>
        </div>
      </header>
    </div>
  );
}

export default App;
