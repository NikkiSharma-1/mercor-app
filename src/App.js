import TextEditor from "./TextEditor"
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid";
import Header from "./Header";
import { Fragment } from "react";
//import Sidebar from "./Sidebar";

function App() {
  return (
   <Fragment>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Navigate replace to={`/documents/${uuidV4()}`} />}/>
        <Route path="/documents/:id" element={<TextEditor />} />
        </Routes>
        </BrowserRouter>
        </Fragment>
  )
}

export default App;
