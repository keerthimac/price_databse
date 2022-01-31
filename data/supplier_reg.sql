USE materials;
CREATE TABLE suppliers (
  supplier_id INT AUTO_INCREMENT PRIMARY KEY,
  supplier_name VARCHAR(100) NOT NULL
);
CREATE TABLE supplier_addresses (
  address_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  supplier_id INT NOT NULL,
  address_01 VARCHAR(100),
  address_02 VARCHAR(100),
  city VARCHAR(25),
  district VARCHAR(25),
  province VARCHAR(25),
  FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);
CREATE TABLE supplier_contacts (
  contact_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  supplier_id INT NOT NULL,
  contact_name VARCHAR(100),
  contact_role VARCHAR(100),
  contact_phone VARCHAR(100),
  contact_email VARCHAR(100),
  FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);
CREATE TABLE supplier_accounts (
  account_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  supplier_id INT NOT NULL,
  account_name VARCHAR(100),
  account_bank VARCHAR(100),
  account_branch VARCHAR(100),
  FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);