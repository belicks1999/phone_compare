import './App.css';
import SearchBox from './components/Searchbox';
import PhoneCard from './components/PhoneCard';
import CompareTable from './components/CompareTable';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-start items-center pt-10 pb-10">
      <SearchBox />
      <PhoneCard />
      <CompareTable/>
    </div>
  );
}

export default App;
