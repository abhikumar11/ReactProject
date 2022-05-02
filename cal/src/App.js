import logo from './logo.svg';
import './App.css';
import ExpenseItem from './component/ExpenseItem';
function App() {
  const expenses=[
    {title:"Car Insurance",amount:200,date:new Date(2022,4,2)},
    {title:"Bike Insurance",amount:100,date:new Date(2022,3,5)},
    {title:"Life Insurance",amount:300,date:new Date(2022,2,2)}
  ];
  return (
    <div className="App">
     <ExpenseItem title={expenses[0].title} date={expenses[0].date} price={expenses[0].amount}/>
     <ExpenseItem title={expenses[1].title} date={expenses[1].date} price={expenses[1].amount}/>
     <ExpenseItem title={expenses[2].title} date={expenses[2].date} price={expenses[2].amount}/>
    </div>
  );
}

export default App;
