create database resto;
use resto;

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE RestaurantTables (
    table_id INT AUTO_INCREMENT PRIMARY KEY,
    table_number INT NOT NULL UNIQUE,
    seats INT NOT NULL,
    is_reserved BOOLEAN DEFAULT FALSE
);

CREATE TABLE Reservations (
    reservation_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    table_id INT NOT NULL,
    reservation_time DATETIME NOT NULL,
    guests INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (table_id) REFERENCES RestaurantTables(table_id) ON DELETE CASCADE
);


INSERT INTO RestaurantTables (table_number, seats, is_reserved) VALUES
(1, 2, FALSE),
(2, 4, FALSE),
(3, 6, TRUE),
(4, 2, TRUE),
(5, 4, FALSE),
(6, 8, FALSE),
(7, 2, TRUE),
(8, 6, FALSE);
