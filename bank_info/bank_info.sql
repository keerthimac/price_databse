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
--@block
DROP TABLE branches;
--@block
DROP TABLE banks;
INSERT INTO banks (bank_code, bank_name)
VALUES(7010, 'Bank of Ceylon');
INSERT INTO banks (bank_code, bank_name)
VALUES(7038, 'Standard Chartered Bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7047, 'Citi Bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7056, 'Commercial Bank PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7074, 'Habib Bank Ltd');
INSERT INTO banks (bank_code, bank_name)
VALUES(7083, 'Hatton National Bank PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7092, 'Hongkong Shanghai Bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7108, 'Indian Bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7117, 'Indian Overseas Bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7135, 'Peoples Bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7144, 'state bank of india');
INSERT INTO banks (bank_code, bank_name)
VALUES(7162, 'nations trust bank PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7205, 'deutsche bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7214, 'National Development Bank PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7269, 'MCB bank ltd');
INSERT INTO banks (bank_code, bank_name)
VALUES(7278, 'sampath bank PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7287, 'seylan bank PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7302, 'union bank of Colombo PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7311, 'Pan Asia Banking Corporation PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7454, 'DFCC Bank PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7463, 'Amana Bank PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7481, 'Cargills Bank Limited');
INSERT INTO banks (bank_code, bank_name)
VALUES(
        7612,
        'Cooperative Regional Rural Bank LTD Polgahawela'
    );
INSERT INTO banks (bank_code, bank_name)
VALUES(
        7658,
        'Lanka Credit and Business Finance Limited'
    );
INSERT INTO banks (bank_code, bank_name)
VALUES(7719, 'National Savings Bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7728, 'Sanasa Development Bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7737, 'HDFC Bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7746, 'Citizen Development Business Finance PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7755, 'Regional Development Bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7764, 'State Mortgage & Investment Bank');
INSERT INTO banks (bank_code, bank_name)
VALUES(7773, 'LB Finance PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7782, 'Senkadagala Finance PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7807, 'Commercial Leasing & Finance');
INSERT INTO banks (bank_code, bank_name)
VALUES(7816, 'Vallibel Finance PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7825, 'Central Finance PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7834, 'Kanrich Finance Limited');
INSERT INTO banks (bank_code, bank_name)
VALUES(7852, 'Alliance Finance Company PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7861, 'LOLC Finance PLC ');
INSERT INTO banks (bank_code, bank_name)
VALUES(7898, 'Merchant Bank of Sri Lanka & Finance PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7904, 'HNB Finance PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7913, 'Mercantile Investment and Finance PLC ');
INSERT INTO banks (bank_code, bank_name)
VALUES(7922, 'Peoples Leasing & Finance PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7968, 'Siyapatha Finanace PLC');
INSERT INTO banks (bank_code, bank_name)
VALUES(7959, 'Bimputh Finance PLC');