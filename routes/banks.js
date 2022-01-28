const router = require("express").Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const response = await pool.query(
      // "SELECT bank_name,branch_code,branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bank_name like ?",
      // ["%bank%"]
      "SELECT * FROM banks ORDER BY bank_name ASC"
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;
    //console.log(code);
    const response = await pool.query(
      // "SELECT bank_name,branch_code,branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bank_name like ?",
      // ["%bank%"]
      "SELECT branch_id, branch_code, branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bk.bank_code = ? ORDER BY br.branch_location ASC;",
      [code]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
