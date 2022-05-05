import './App.css';
import Navbar from './component/Navbar';
import LeftPane from './component/LeftPane';
import WidgetView from './component/WidgetView'
import Main from './component/Main.js'

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id='dash-board'>
        <LeftPane />
        <Main />
        <WidgetView />
      </section>
      
    </div>
  );
}

export default App;
