function App() {
  return (
    <main>
      <div className="card grid grid-rows-[repeat(3,_auto)] grid-cols-[2rem,_20rem,_2rem] *:rounded-[1rem] *:text-black *:text-center">
        <div className="welcome bg-gradient-to-r from-cyan-500 to-blue-500 col-span-full row-[1/3] grid grid-rows-subgrid grid-cols-subgrid *:items-center *:justify-center">
          <div className="col-[2/3] py-[1rem]">
            <h1 className="hello text-[1.25rem] font-normal">Heyy!</h1>
            <p className="text-pretty">
              You can contact me whenever you need help or just curious about
              something.
            </p>
          </div>
        </div>

        <div className="start-chatting bg-white col-[2/3] row-[2/4] *:items-center *:justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] grid gap-[2rem] pt-[2rem] pb-[4rem] px-[4rem] ">
          <h2 className="font-[1rem]">Start chatting</h2>
          <div className="rep-info flex flex-col space-y-2 items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/127741549?v=4"
              className="size-[6rem] rounded-full max-w-[6rem]"
              alt=""
            />
            <p className="name text-[1.125rem]">Mohammed Nayeem</p>
            <div
              className="status flex items-center text-[0.875rem] opacity-[0.7] rounded-full border-2 border-[rgba(133,133,133,0.5)] w-max py-[0.05em] gap-[0.5em] px-[0.75em] before:content-[' '] before:bg-green-400 before:rounded-full before:h-[0.6em] before:aspect-square"
              data-status="active"
            >
              Active
            </div>
            <button className="button rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 p-[0.75em] cursor-pointer text-[1.05rem] hover:bg-[size:200%] focus:bg-[size:200%] bg-[size:100%] duration-[250ms] hover:scale-[1.05] focus:scale-[1.05] transition-all ease-in-out">
              Send a message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
