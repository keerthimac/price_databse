import React from "react";

import LocationForm from "./LocationForm";
import BankFrom from "./BankFrom";
import ContactFrom from "./ContactFrom";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function SupplierInfo() {
  return (
    <div className='my-5'>
      <Form.Label>Supplier Name</Form.Label>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
        />
      </InputGroup>
      <ContactFrom />
      <LocationForm />
      <BankFrom />
    </div>
  );
}

export default SupplierInfo;
