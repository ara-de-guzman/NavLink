import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "./links/Messages";
import Home from "./links/Home";
import Contacts from "./links/Contacts";
import { Drafts } from "./links/Drafts";
import { Analytics } from "./links/Analytics";
import { Admin } from "./links/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/messages" element={<Messages/>}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/drafts" element={<Drafts />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
