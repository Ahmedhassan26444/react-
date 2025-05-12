import './App.css';
function MyComponet({nameforclass , name , income }) {
  return (
    <div>
        <div classname = {nameforclass} >{name}:${income} 
          <hr/>
        </div>
    </div>
    
  );
}
function App() {
  return (
    <div>
    hello <MyComponet name={" Ahmad "} nameforclass="div1" income={3000}/> 
   <MyComponet name={" hassan "} nameforclass="div2"  income={5000}/>
   <MyComponet name={" jutt "} nameforclass="div3"  income={8000}/>guys 
    </div>
  );
}
export default App;
