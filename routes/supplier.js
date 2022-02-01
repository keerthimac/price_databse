const router = require("express").Router();
const pool = require("../db");

//get all suppliers
router.get("/", async (req, res) => {
  try {
    const response = await pool.query(
      // "SELECT bank_name,branch_code,branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bank_name like ?",
      // ["%bank%"]
      "SELECT * FROM suppliers ORDER BY supplier_name ASC"
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get supplier
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //console.log(code);
    const response = await pool.query(
      //"SELECT * FROM suppliers AS sup LEFT JOIN supplier_addresses AS addr ON sup.supplier_id = addr.supplier_id LEFT JOIN supplier_contacts AS con ON sup.supplier_id = con.supplier_id LEFT JOIN supplier_accounts as acc ON sup.supplier_id = acc.supplier_id"
      "SELECT * FROM suppliers AS sup LEFT JOIN supplier_addresses AS addr ON sup.supplier_id = addr.supplier_id LEFT JOIN supplier_contacts AS con ON sup.supplier_id = con.supplier_id LEFT JOIN supplier_accounts as acc ON sup.supplier_id = acc.supplier_id WHERE sup.supplier_id = ?",
      [id]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//Register supplier
router.post("/sup_name", async (req, res) => {
  try {
    const { supName } = req.body;
    //destructure the body here
    console.log(supName);

    const response = await pool.query(
      "INSERT INTO suppliers (supplier_name) VALUES (?)",
      [supName]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/sup_contact", async (req, res) => {
  try {
    console.log(req.body);
    //destructure the body here
    const {
      contact_person,
      contact_role,
      contact_tel,
      contact_email,
      supplier_id,
    } = req.body;

    const response = await pool.query(
      "INSERT INTO supplier_contacts (supplier_id,contact_name,contact_role,contact_phone,contact_email) VALUES (?,?,?,?,?)",
      [supplier_id, contact_person, contact_role, contact_tel, contact_email]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/sup_location", async (req, res) => {
  try {
    console.log(req.body);
    //destructure the body here
    const { supplier_id, address_01, address_02, city, district, province } =
      req.body;

    const response = await pool.query(
      "INSERT INTO supplier_addresses (supplier_id,address_01,address_02,city,district,province) VALUES (?,?,?,?,?,?)",
      [supplier_id, address_01, address_02, city, district, province]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/sup_bank", async (req, res) => {
  try {
    const {
      account_name,
      account_number,
      bank_name,
      branch_location,
      supplier_id,
    } = req.body;
    console.log(req.body);

    const response = await pool.query(
      "INSERT INTO supplier_accounts (supplier_id,account_name,account_number,account_bank,account_branch) VALUES (?,?,?,?,?)",
      [supplier_id, account_name, account_number, bank_name, branch_location]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
