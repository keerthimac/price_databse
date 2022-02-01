import { useEffect, useState } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BankFrom({ getSupplierBank, supBank }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    getSupplierBank({ ...supBank, [name]: value });
  };

  const [bank, setBank] = useState({
    bank_code: 0,
    bank_name: "--Select Bank--",
  });
  const [branch, setBranch] = useState({
    branch_code: 0,
    branch_location: "--Select Branch--",
  });
  const [bankList, setBankList] = useState([
    {
      bank_code: 0,
      bank_name: "--Select Bank--",
    },
  ]);
  const [branchList, setBranchList] = useState([
    {
      branch_id: 1500,
      branch_code: 0,
      branch_location: "--Select Branch--",
    },
  ]);

  useEffect(() => {
    getBankList();
    getBranchList(bank);
  }, [bank]);

  const getBankList = async () => {
    try {
      const response = await fetch("http://localhost:5000/banks");
      const data = await response.json();
      setBankList([{ bank_code: 0, bank_name: "--Select Bank--" }, ...data]);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getBranchList = async (bank) => {
    try {
      if (bank.bank_code === 0) {
        setBranch({
          branch_id: 0,
          branch_code: 0,
          branch_location: "--Select Branch--",
        });
        return;
      }
      const code = bank.bank_code;
      //console.log(code);
      const response = await fetch(`http://localhost:5000/banks/${code}`);
      const data = await response.json();
      setBranchList([
        { branch_id: 0, branch_code: 0, branch_location: "--Select Branch--" },
        ...data,
      ]);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSelectBank = (e) => {
    //console.log(e.target.value);
    //setBank(e);
    if (e.target.value === "--Select Bank--") {
      setBranchList([
        { branch_id: 0, branch_code: 0, branch_location: "--Select Branch--" },
      ]);
    } else {
      let selectBank = (bank) => {
        let result = bankList.filter((item) => item.bank_name === bank);
        setBank(result[0]);
      };
      selectBank(e.target.value);
      const { name, value } = e.target;
      getSupplierBank({ ...supBank, [name]: value });
    }
  };

  const handleSelectBranch = (e) => {
    //console.log(e.target.value);
    //setBank(e);
    let selectBranch = (branch) => {
      let result = branchList.filter((item) => item.branch_location === branch);
      setBranch(result[0]);
    };
    selectBranch(e.target.value);
    const { name, value } = e.target;
    getSupplierBank({ ...supBank, [name]: value });
  };

  return (
    <>
      <div className='mt-5'>
        <h4 className='mb-3'>Account Information</h4>
        <Form.Label>Account Name</Form.Label>
        <InputGroup className='mb-3'>
          <FormControl
            name='account_name'
            placeholder='Username'
            aria-label='Username'
            aria-describedby='basic-addon1'
            onChange={handleChange}
          />
        </InputGroup>
        <Form.Label>Account Number</Form.Label>
        <InputGroup className='mb-3'>
          <FormControl
            name='account_number'
            placeholder='Username'
            aria-label='Username'
            aria-describedby='basic-addon1'
            type='number'
            onChange={handleChange}
          />
        </InputGroup>
        <Form.Group className='mb-3'>
          <Form.Label>Bank</Form.Label>
          <Form.Select name='bank_name' onChange={handleSelectBank}>
            {bankList.map((item) => (
              <option key={item.bank_code}>{item.bank_name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Branch</Form.Label>
          <Form.Select name='branch_location' onChange={handleSelectBranch}>
            {branchList.map((item) => (
              <option key={item.branch_id}>{item.branch_location}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>
    </>
  );
}

export default BankFrom;
