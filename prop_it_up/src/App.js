import './App.css';
import PersonCard from './Component/PersonCard';

function App() {
  return (
    <div className="App">
      < PersonCard 
        firstName={"Jane"}
        lastName={"Doe"} 
        PersonCard age={"45"}
        PersonCard hairColor={"Black"}
      />
            < PersonCard 
        firstName={"John"}
        lastName={"Smith"} 
        PersonCard age={"88"}
        PersonCard hairColor={"Brown"}
      />
            < PersonCard 
        firstName={"Millard"}
        lastName={"Fillmore"} 
        PersonCard age={"50"}
        PersonCard hairColor={"Brown"}
      />
            < PersonCard 
        firstName={"Maria"}
        lastName={"Smith"} 
        PersonCard age={"62"}
        PersonCard hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
