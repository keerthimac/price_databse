import { useState } from "react";

import LocationForm from "./LocationForm";
import BankFrom from "./BankFrom";
import ContactFrom from "./ContactFrom";
import SupplierName from "./SupplierName";

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
    </div>
  );
}

export default SupplierInfo;
