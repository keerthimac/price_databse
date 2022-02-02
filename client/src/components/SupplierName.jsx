import React from "react";
import { useState } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function SupplierName({ getSupplierName, supName }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    getSupplierName({ [name]: value });
  };

  return (
    <div className='my-5'>
      <Form.Label>Supplier Name</Form.Label>
      <InputGroup className='mb-3'>
        <FormControl
          value={supName.supName}
          name='supName'
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
          onChange={(e) => handleChange(e)}
        />
      </InputGroup>
    </div>
  );
}

export default SupplierName;
