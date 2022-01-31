import { useState } from "react";

import LocationForm from "./LocationForm";
import BankFrom from "./BankFrom";
import ContactFrom from "./ContactFrom";
import SupplierName from "./SupplierName";

import Button from "react-bootstrap/Button";

function SupplierInfo() {
  const [supName, setSupName] = useState("");
  const [supContact, setSupContact] = useState({
    contact_person: "",
    contact_role: "",
    contact_tel: "",
    contact_email: "",
  });
  const [supLocation, setSupLocation] = useState({
    address_01: "",
    address_02: "",
    province: "",
    district: "",
    city: "",
  });
  const [supBank, setSupBank] = useState("");

  const getSupplierName = (name) => {
    setSupName(name);
  };

  const getSupplierContact = (contact) => {
    setSupContact(contact);
  };

  const getSupplierLocation = (location) => {
    setSupLocation(location);
  };

  const getSupplierBank = (bank) => {
    setSupBank(bank);
  };

  const handleSubmit = async () => {
    try {
      const response1 = await fetch("http://localhost:5000/supplier/sup_name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(supName),
      });
      const data = await response1.json();
      const supId = { supplier_id: data.insertId };
      console.log(supId);

      const response2 = await fetch(
        "http://localhost:5000/supplier/sup_contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...supContact, ...supId }),
        }
      );
      const data2 = await response2.json();

      const response3 = await fetch(
        "http://localhost:5000/supplier/sup_location",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...supLocation, ...supId }),
        }
      );
      const data3 = await response3.json();

      const response4 = await fetch("http://localhost:5000/supplier/sup_bank", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...supBank, ...supId }),
      });
      const data4 = await response4.json();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <SupplierName getSupplierName={getSupplierName} supName={supName} />
      <ContactFrom
        getSupplierContact={getSupplierContact}
        supContact={supContact}
      />
      <LocationForm
        getSupplierLocation={getSupplierLocation}
        supLocation={supLocation}
      />
      <BankFrom getSupplierBank={getSupplierBank} supBank={supBank} />
      <div className='d-grid gap-2 mt-4'>
        <Button
          onClick={handleSubmit}
          type='submit'
          variant='primary'
          size='lg'>
          Register User
        </Button>
      </div>
    </div>
  );
}

export default SupplierInfo;
