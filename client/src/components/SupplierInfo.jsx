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
      const data = {
        supName,
        supContact,
        supLocation,
        supBank,
      };

      const response = await fetch("http://localhost:5000/sup_name", {
        method: "POST",
        body: JSON.stringify(supName),
      });
      const body = await response.json();
      console.log(body);
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
      <div className="d-grid gap-2 mt-4">
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="primary"
          size="lg"
        >
          Register User
        </Button>
      </div>
    </div>
  );
}

export default SupplierInfo;
