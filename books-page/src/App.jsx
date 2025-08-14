import './App.css';
import ProductTab from './ProductTab.jsx';
import MsgBox from './MsgBox.jsx';

function App() {
  return (
    <>
      
      <h2>Amazing Deals | Shop Now </h2>
      <ProductTab />
      <MsgBox userName={"Violet Sorrengail"} textColor={"violet"}/>
    </>
  );
}

export default App;
