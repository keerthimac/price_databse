CREATE DATABASE materials;

--@block
CREATE TABLE fitting_types (
    fitting_type_id INT AUTO_INCREMENT NOT NULL,
    fitting_type VARCHAR(255) NOT NULL,
    PRIMARY KEY (fitting_type_id)
);

--@block
CREATE TABLE pvc_sizes(
    pvc_size_id INT AUTO_INCREMENT NOT NULL,
    pvc_size_metric VARCHAR(255) NOT NULL,
    pvc_size_imperial VARCHAR(255) NOT NULL,
    PRIMARY KEY (pvc_size_id)
);

--@block
CREATE TABLE pvc_types(
    pvc_type_id INT AUTO_INCREMENT NOT NULL,
    pvc_type VARCHAR(255) NOT NULL,
    PRIMARY KEY (pvc_type_id)
);

--@block
CREATE TABLE fitting_prices(
    fitting_price_id INT AUTO_INCREMENT NOT NULL,
    fitting_type_id INT NOT NULL,
    pvc_size_id INT NOT NULL,
    pvc_type_id INT NOT NULL,
    fitting_price DECIMAL(10,2),
    PRIMARY KEY (fitting_price_id),
    FOREIGN KEY (fitting_type_id) REFERENCES fitting_types(fitting_type_id),
    FOREIGN KEY (pvc_size_id) REFERENCES pvc_sizes(pvc_size_id),
    FOREIGN KEY (pvc_type_id) REFERENCES pvc_types(pvc_type_id)
);

--@block
CREATE TABLE pipe_prices(
    pipe_price_id INT AUTO_INCREMENT NOT NULL,
    pipe_size_id INT NOT NULL,
    pipe_type_id INT NOT NULL,
    pipe_price DECIMAL(10,2),
    PRIMARY KEY (pipe_price_id),
    FOREIGN KEY (pipe_size_id) REFERENCES pvc_sizes(pvc_size_id),
    FOREIGN KEY (pipe_type_id) REFERENCES pvc_types(pvc_type_id)
);


--PIPE PRICE QUERY
--@block
SELECT pvc_size_imperial,pvc_type,pipe_price  FROM pvc_sizes AS ps INNER JOIN pipe_prices AS pp ON ps.pvc_size_id = pp.pvc_size_id
INNER JOIN pvc_types AS pt 
USING (pvc_type_id) 
WHERE pvc_size_metric ='110mm' ORDER BY pipe_price ASC

--@block
--FITTING PRICE QUERY
--@block
SELECT fitting_type,pvc_size_imperial,pvc_size_metric,pvc_type,fitting_price FROM fitting_types AS ft INNER JOIN fitting_prices AS fp ON ft.fitting_type_id = fp.fitting_type_id
INNER JOIN pvc_types AS pt
USING (pvc_type_id) 
INNER JOIN pvc_sizes AS ps
USING (pvc_size_id)
WHERE fitting_type = 'socket' AND pvc_size_metric = '110mm'









--@block
use materials;

--@block
use demo;

--@block
DROP TABLE pvc_types;



