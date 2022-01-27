USE materials;
--@block
CREATE TABLE banks(
    bank_code INT NOT NULL,
    bank_name VARCHAR(250),
    PRIMARY KEY(bank_code)
);
--@block
CREATE TABLE branches(
    branch_id INT AUTO_INCREMENT,
    bank_code INT NOT NULL,
    branch_code INT,
    branch_location VARCHAR(250),
    PRIMARY key(branch_id),
    FOREIGN KEY (bank_code) REFERENCES banks(bank_code)
);
--@block
SELECT bank_name,
    branch_code,
    branch_location
FROM banks AS bk
    LEFT JOIN branches AS br ON bk.bank_code = br.bank_code;
--@BLOCK
SELECT bank_name,
    branch_code,
    branch_location
FROM banks AS bk
    LEFT JOIN branches AS br ON bk.bank_code = br.bank_code
WHERE bk.bank_code = 7135;
--@block
DROP TABLE branches;
--@block
DROP TABLE banks;