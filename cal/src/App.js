import logo from './logo.svg';
import './App.css'; 
import Expense from './component/Expense';
function App() {
  const expenses=[
    {title:"Car Insurance",amount:200,date:new Date(2022,4,2)},
    {title:"Bike Insurance",amount:100,date:new Date(2022,3,5)},
    {title:"Life Insurance",amount:300,date:new Date(2022,2,2)}
  ];
  return (
    <div className="App">
    <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
