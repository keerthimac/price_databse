import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEffect, useState } from "react";
import propTypes from "prop-types";

function App() {
  const [bank, setBank] = useState("--Select Bank--");
  const [bankList, setBankList] = useState([]);
  const [branchList, setBranchList] = useState("--Select Branch--");

  // useEffect(() => {
  //   getBankList();
  // }, []);

  const getBankList = async () => {
    try {
      const response = await fetch("http://localhost:5000/banks");
      const data = await response.json();
      setBankList(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getBranchList = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/banks/${bank}/branches`
      );
      const data = await response.json();
      setBranchList(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSelect = (e) => {
    console.log(e);
    setBank(e);
  };

  const handleClick = (e) => {
    getBankList();
  };
  return (
    <div className='container'>
      <h1>Dropdown</h1>
      <DropdownButton
        id='dropdown-basic-button'
        title={bank}
        onSelect={handleSelect}
        onClick={handleClick}>
        {bankList.map((item) => (
          <Dropdown.Item key={item.bank_code} eventKey={item.bank_name}>
            {item.bank_name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default App;
