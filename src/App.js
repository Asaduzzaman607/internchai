import logo from './logo.svg';
import './App.css';
import JobsCard from './Components/Home/JobItems/JobsCard/JobsCard';
import Header from './Components/Home/Header/Header';
import JobItems from './Components/Home/JobItems/JobItems';
import NewsLetter from './Components/Home/NewsLetter/NewsLetter';
import Footer from './Components/Home/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
     <JobItems></JobItems>
     <NewsLetter></NewsLetter>
     <Footer></Footer>
    </div>
  );
}

export default App;
