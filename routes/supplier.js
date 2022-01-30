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

router.post("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //destructure the body here

    const response = await pool.query(
      "SELECT * FROM suppliers AS sup LEFT JOIN supplier_addresses AS addr ON sup.supplier_id = addr.supplier_id LEFT JOIN supplier_contacts AS con ON sup.supplier_id = con.supplier_id LEFT JOIN supplier_accounts as acc ON sup.supplier_id = acc.supplier_id WHERE sup.supplier_id = ?",
      [id]
      //"SELECT * FROM suppliers AS sup LEFT JOIN supplier_addresses AS addr ON sup.supplier_id = addr.supplier_id LEFT JOIN supplier_contacts AS con ON sup.supplier_id = con.supplier_id LEFT JOIN supplier_accounts as acc ON sup.supplier_id = acc.supplier_id"
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
