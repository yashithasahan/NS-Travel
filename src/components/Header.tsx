export const Header = () => {
  return (
    <header className="fixed top-0 z-40 w-full ">
      <div className="text-white w-full max-w-[1440px] mx-auto  flex flex-row justify-between px-4">
        <h1 className="text-2xl">Travel App</h1>
        <div>
          <ul className="flex flex-row gap-4 ">
            <li>Home</li>
            <li>Destination</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
