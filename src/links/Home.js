import { Link, Outlet } from "react-router-dom";
import Lock from "../components/Lock";



function Home() {


  return (
    <div className="bg-[#D9D9D9] h-screen w-screen flex">
      <aside className="max-w-sm h-full px-10 py-10 ">
        Logo
        <div className="flex flex-col justify-between h-full px-10 ml-10 ">
          <div>
            <nav className="flex flex-col gap-6 mt-10  w-1/4 absolute  ">
              <Link to="messages" className="hover:bg-white hover:rounded-full p-5">Messages</Link>
              <Link to="contacts" className="hover:bg-white hover:rounded-full p-5">Contacts</Link>
              <Link to="drafts" className="hover:bg-white hover:rounded-full p-5">Drafts</Link>
              <Link to="admin" className="flex items-center hover:bg-white hover:rounded-full p-5">
                Analytics <Lock num={10}/>
              </Link>
              <Link to="admin" className="flex items-center hover:bg-white hover:rounded-full p-5">
                Admin <Lock num={10}/>
              </Link>
            </nav>
          </div>

          <div>
            <nav className="flex flex-col">
              <Link to="settings" className="my-2">
                Settings
              </Link>
              <Link to="logout" className="my-2">
                Log out
              </Link>
            </nav>
          </div>
        </div>
      </aside>
      <div className="bg-white  h-full my-12 mx-3 w-1/4 rounded-3xl p-10 z-10">
        <Outlet/>
      </div>
    </div>
  );
}

export default Home;
