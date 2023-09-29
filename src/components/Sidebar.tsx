import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 px-4 py-8">
      <div className="flex flex-col items-center">
        <img
          className="rounded-full w-24 h-24"
          src="https://avatars.githubusercontent.com/u/71897736?v=4"
          alt="Avatar"
        />
        <h1 className="text-white text-3xl font-semibold mt-2">kknah</h1>
        <div className="w-full mt-8">
          <nav>
        SIDEBAR
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
