import Navbar from "./component/Navbar/Navbar";
import Home from "./screens/Home/Home";
import Login from "./screens/login/Login";
import Rigester from "./screens/rigester/Rigester";
import Settings from "./screens/settings/Settings";
import Single from "./screens/single/Single";
import Write from "./screens/write/Write";
import { BrowserRouter as Router,Routes ,Route,Link} from "react-router-dom";


function App() {
  const user=true;
  return (
    <Router>
  <Navbar/>
  <Routes >
  <Route path="/" element={<Home />}/>
  <Route path="/regiseter" element={user ? <Home/>:<Rigester />}/>  
  <Route path="/Login" element={user ? <Home/>:<Login />}/>
  <Route path="/Settings" element={user ?<Settings />:<Rigester />}/>  
  <Route path="/Write" element={user ? <Write />:<Rigester /> }/>  
  <Route path="/post/:postId" element={<Single />}/>
         
          
  </Routes >
    </Router>
  );
}

export default App;
