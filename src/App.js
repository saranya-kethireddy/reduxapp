
import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import { changeColor } from './features/theme';
import ChangeColor from './components/ChangeColor';
function App() {
  return (
    <div className="App"> 
      <Profile/>
      <Login/>
      <ChangeColor/>
    </div>
  );
}

export default App;
