import './App.css';
import HappyBirthday from './HappyBirthday';
import Header from './Header';
import Reasons from './Reasons';
import Pictures from './Pictures';
import DatePlanner from './DatePlanner';

function App() {
  return (
    <div className="App">
      <Header />
      <HappyBirthday />
      <Reasons />
      <Pictures />
      <DatePlanner />
    </div>
  );
}

export default App;
