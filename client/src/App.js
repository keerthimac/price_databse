import SupplierInfo from "./components/SupplierInfo";
import MaterialDirectory from "./components/MaterialDirectory";

function App() {
  return (
    <div className='container my-5'>
      <h1 className='text-center'>Supplier Registration From</h1>
      <div className='container'>
        <MaterialDirectory />
        {/* <SupplierInfo /> */}
      </div>
      {/* <BankDropdown /> */}
      {/* <h1>Dropdown</h1> */}
    </div>
  );
}

export default App;
