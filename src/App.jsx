function App() {
  return (
    <main>
      <div className="card grid grid-rows-[repeat(3,_auto)] grid-cols-[2rem,_20rem,_2rem]">
        <div className="welcome bg-cyan-200 col-span-full row-[1/3] grid grid-rows-subgrid">
          <div>
            <h1>Hi there!</h1>
            <p>
              You can contact me whenever you need help or just curious about
              something.
            </p>
          </div>
        </div>

        <div className="start-chatting bg-orange-400 col-[2/3] row-[2/4]">
          <h2 className="">Start chatting</h2>
          <div className="">
            <img
              src="https://avatars.githubusercontent.com/u/127741549?v=4"
              alt=""
              className="size-20 rounded-full"
            />
            <p>Mohammed Nayeem</p>
            <div className="status" data-status="active">
              Active
            </div>
            <button className="button">Send a message</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
