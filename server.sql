CREATE DATABASE noleggio_bus;

USE noleggio_bus;

CREATE TABLE bus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    capienza INT NOT NULL,
    prezzo DECIMAL(10, 2) NOT NULL,
    immagine VARCHAR(255) NOT NULL
);
