import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Content from './components/Content';
function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="content">
      <Content />
      </div>
    </div>
  );
}

export default App;
