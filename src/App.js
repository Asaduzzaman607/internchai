import logo from './logo.svg';
import './App.css';
import JobsCard from './Components/Home/JobItems/JobsCard/JobsCard';
import Header from './Components/Home/Header/Header';
import JobItems from './Components/Home/JobItems/JobItems';

function App() {
  return (
    <div>
      <Header></Header>
     <JobsCard></JobsCard>
    </div>
  );
}

export default App;
