import React from "react";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function ContactFrom({ getSupplierContact, supContact }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    getSupplierContact({ [name]: value });
  };
  //console.log(supContact.contact_person);

  return (
    <div className='mt-5'>
      <h4>Contact Information</h4>
      <Form.Label>Contact Person</Form.Label>
      <InputGroup className='mb-3'>
        <FormControl
          value={supContact.contact_person}
          name='contact_person'
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
          onChange={handleChange}
        />
      </InputGroup>

      <Form.Group className='mb-3'>
        <Form.Label>Role</Form.Label>
        <Form.Select name='contact_role' onChange={handleChange}>
          <option>---Select Role---</option>
          <option>Owner</option>
          <option>Sales Representative</option>
          <option>Driver</option>
        </Form.Select>
      </Form.Group>

      <Form.Label>Telephone number</Form.Label>
      <InputGroup className='mb-3'>
        <FormControl
          name='contact_tel'
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
          onChange={handleChange}
        />
      </InputGroup>

      <Form.Label>Email</Form.Label>
      <InputGroup className='mb-3'>
        <FormControl
          name='contact_email'
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
          onChange={handleChange}
        />
      </InputGroup>
    </div>
  );
}

export default ContactFrom;
