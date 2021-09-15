import { Nav } from "./components/Header/Nav";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  const newUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email,password);
  }
  return (
    <div className="App">
      <Nav />
      <button style={{ backgroundColor: 'blue', width: '200px' }} onClick={() => {
        newUser('hola@uesamail.com', 'password');
      }} />
    </div>
  );
}

export default App;
