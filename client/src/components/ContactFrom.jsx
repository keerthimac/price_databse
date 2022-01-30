import React from "react";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function ContactFrom() {
  return (
    <div className='mt-5'>
      <h4>Contact Information</h4>
      <Form.Label>Contact Person</Form.Label>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
        />
      </InputGroup>

      <Form.Group className='mb-3'>
        <Form.Label>Role</Form.Label>
        <Form.Select>
          <option>Owner</option>
          <option>Sales Representative</option>
          <option>Driver</option>
        </Form.Select>
      </Form.Group>

      <Form.Label>Telephone number</Form.Label>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
        />
      </InputGroup>
    </div>
  );
}

export default ContactFrom;
