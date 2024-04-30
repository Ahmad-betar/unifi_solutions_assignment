import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-20 flex flex-col p-2 bg-[rgb(250, 204, 21)] bg-yellow-400">
      Sidebar
      <ul className="flex flex-col">
        <Link to={""}>
          <li className="text-wrap">reported bike thefts</li>
        </Link>
        <Link to={""}>
          <li>vdzvdz</li>
        </Link>
        <Link to={""}>
          <li>zdvdzv</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
