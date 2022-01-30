const router = require("express").Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const response = await pool.query(
      // "SELECT bank_name,branch_code,branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bank_name like ?",
      // ["%bank%"]
      "SELECT id as province_id,name_en as province_name FROM provinces ORDER BY name_en ASC"
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //console.log(code);
    const response = await pool.query(
      // "SELECT bank_name,branch_code,branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bank_name like ?",
      // ["%bank%"]
      "SELECT districts.id as district_id,districts.name_en as district_name FROM materials.provinces JOIN districts ON provinces.id=districts.province_id WHERE provinces.id= ? ORDER BY districts.name_en ASC;",
      [id]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id/:dis_id", async (req, res) => {
  try {
    const { id, dis_id } = req.params;
    //console.log(code);
    const response = await pool.query(
      // "SELECT bank_name,branch_code,branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bank_name like ?",
      // ["%bank%"]
      "SELECT cities.id as city_id ,cities.name_en as city_name FROM materials.provinces JOIN districts ON provinces.id=districts.province_id JOIN cities ON districts.id = cities.district_id WHERE provinces.id=? AND districts.id = ?;",
      [id, dis_id]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
