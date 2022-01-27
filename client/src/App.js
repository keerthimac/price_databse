import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BankFrom from "./components/BankFrom";
import BankDropdown from "./components/BankDropdown";

function App() {
  // const [bank, setBank] = useState({
  //   bank_code: 0,
  //   bank_name: "--Select Bank--",
  // });
  // const [branch, setBranch] = useState({
  //   branch_code: 0,
  //   branch_location: "--Select Branch--",
  // });
  // const [bankList, setBankList] = useState([
  //   {
  //     bank_code: 0,
  //     bank_name: "--Select Bank--",
  //   },
  // ]);
  // const [branchList, setBranchList] = useState([
  //   {
  //     branch_code: 0,
  //     branch_location: "--Select Branch--",
  //   },
  // ]);

  // useEffect(() => {
  //   getBranchList(bank);
  // }, [bank]);

  // const getBankList = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/banks");
  //     const data = await response.json();
  //     setBankList(data);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // const getBranchList = async (bank) => {
  //   try {
  //     const code = bank.bank_code;
  //     console.log(code);
  //     setBranch({
  //       branch_code: 0,
  //       branch_location: "--Select Branch--",
  //     });
  //     const response = await fetch(`http://localhost:5000/banks/${code}`);
  //     const data = await response.json();
  //     setBranchList(data);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // const handleSelectBank = (e) => {
  //   console.log(e.target.value);
  //   //setBank(e);
  //   let selectBank = (bank) => {
  //     let result = bankList.filter((item) => item.bank_name === bank);
  //     setBank(result[0]);
  //   };
  //   selectBank(e.target.value);

  //   //console.log(selected);
  // };

  // const handleSelectBranch = (e) => {
  //   console.log(e.target.value);
  //   //setBank(e);
  //   let selectBranch = (branch) => {
  //     let result = branchList.filter((item) => item.branch_location === branch);
  //     setBranch(result[0]);
  //   };

  //   selectBranch(e.target.value);

  //   //console.log(selected);
  // };

  // const handleClick = (e) => {
  //   getBankList();
  // };

  return (
    <div className="container">
      <BankFrom />
      {/* <BankDropdown /> */}
      {/* <h1>Dropdown</h1>

      <DropdownButton
        id="dropdown-basic-button"
        title={bank.bank_name}
        onSelect={handleSelectBank}
        onClick={handleClick}
      >
        {bankList.map((item) => (
          <Dropdown.Item key={item.bank_code} eventKey={item.bank_name}>
            {item.bank_name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton
        id="dropdown-basic-button"
        title={branch.branch_location}
        onSelect={handleSelectBranch}
        className="mt-3"
      >
        {branchList.map((item) => (
          <Dropdown.Item key={item.branch_code} eventKey={item.branch_location}>
            {item.branch_location}
          </Dropdown.Item>
        ))}
      </DropdownButton> */}
      {/* <Form>
        <Form.Group className="mb-3">
          <Form.Label>Bank</Form.Label>
          <Form.Select onChange={handleSelectBank} onClick={handleClick}>
            {bankList.map((item) => (
              <option key={item.bank_code}>{item.bank_name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Branch</Form.Label>
          <Form.Select>
            {branchList.map((item) => (
              <option key={item.branch_code}>{item.branch_location}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </div>
  );
}

export default App;
