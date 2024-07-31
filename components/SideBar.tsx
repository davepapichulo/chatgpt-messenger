import NewChat from "./NewChat";

const SideBar = () => {
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        {/* New Chat */}
        <NewChat />

        <div>{/* Model Selection */}</div>
      </div>

      {/* Map through Chat-Row */}
    </div>
  );
};

export default SideBar;
