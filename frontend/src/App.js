import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">

      <Header/>
      <Register/>
     
      {/* <div className="profile">
      {/* <Profile name="Nandhini" role="Trainer" company="Terv Pro"/>
       <Profile name="Anu" role="Aptitude Trainer" company="Terv Pro"/> */}
       {/* </div> */} 

    </div>
  );
}
export default App;
