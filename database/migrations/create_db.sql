USE master
GO

DROP DATABASE IF EXISTS [Marketplace]
GO

CREATE DATABASE [Marketplace]
GO

USE [Marketplace]
GO

/********************************* TABLES *************************************/

CREATE TABLE Products(
    product_id INT PRIMARY KEY IDENTITY(1, 1) NOT NULL,
    primary_image VARCHAR(32) UNIQUE NOT NULL,
    category VARCHAR(32) NOT NULL,
    size VARCHAR(32) NOT NULL,
    descriptor VARCHAR(32) NOT NULL,
    subtext VARCHAR(32) NOT NULL,
    price DECIMAL(18, 18) NOT NULL,
    condition VARCHAR(32) NOT NULL,
    available BIT NOT NULL DEFAULT 0
)
GO

CREATE TABLE Images(
    image_id INT PRIMARY KEY IDENTITY(1, 1) NOT NULL,
    product_id INT FOREIGN KEY REFERENCES Products(product_id) NOT NULL,
    image_name VARCHAR(32) NOT NULL
)
GO

CREATE TABLE Customers(
    customer_id INT PRIMARY KEY IDENTITY(1, 1) NOT NULL,
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL,
    phone_number VARCHAR(32) NOT NULL,
    address_first VARCHAR(32) NOT NULL,
    address_second VARCHAR(32) NOT NULL,
    city VARCHAR(32) NOT NULL,
    state_code VARCHAR(32) NOT NULL,
    zipcode VARCHAR(32) NOT NULL
)
GO

CREATE TABLE Orders(
    order_id INT PRIMARY KEY IDENTITY(1, 1) NOT NULL,
    customer_id INT FOREIGN KEY REFERENCES Customers(customer_id),
    placement_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    item_count INT NOT NULL
)
GO

CREATE TABLE ProductOrders(
    purchase_id INT PRIMARY KEY IDENTITY(1, 1) NOT NULL,
    order_id INT FOREIGN KEY REFERENCES Orders(order_id) NOT NULL,
    product_id INT FOREIGN KEY REFERENCES Products(product_id) NOT NULL
)
GO

/********************************** TYPES *************************************/
CREATE TYPE ProductIdTableType AS TABLE ( product_id INT )
GO

CREATE TYPE CustomerTableType AS TABLE (
    first_name VARCHAR(32), last_name VARCHAR(32),
    email VARCHAR(32), phone_number VARCHAR(32),
    address_first VARCHAR(32), address_second VARCHAR(32),
    city VARCHAR(32), state_code VARCHAR(32), zipcode VARCHAR(32)
)
GO

/********************************* FUNCTIONS **********************************/
CREATE OR ALTER FUNCTION fnCheckProductAvailability (
    @product_ids ProductIdTableType READONLY
) RETURNS @unavailable TABLE ( product_id INT )
AS BEGIN
    INSERT INTO @unavailable ( product_id )
    SELECT product_id FROM Products 
    WHERE product_id IN ( SELECT product_id FROM @product_ids )
    AND (available = 0)
    RETURN
END
GO

/**************************** STORED PROCEDURES *******************************/
CREATE OR ALTER PROCEDURE spInsertCustomer
    @CustomerType CustomerTableType READONLY
AS BEGIN
    INSERT INTO Customers 
    SELECT * FROM @CustomerType

    SELECT [customer_id] = SCOPE_IDENTITY()
END
GO

CREATE OR ALTER PROCEDURE spInsertProductOrders
    @product_ids ProductIdTableType READONLY,
    @order_id INT
AS BEGIN
    INSERT INTO ProductOrders
    SELECT [order_id] = @order_id, product_id FROM @product_ids

    SELECT COUNT(*) FROM product_ids
END
GO

CREATE OR ALTER PROCEDURE spInsertOrder
    @customer_id INT,
    @item_count INT
AS BEGIN
    INSERT INTO Orders (customer_id, item_count)
    VALUES (@customer_id, @item_count)

    SELECT [order_id] = SCOPE_IDENTITY()
END
GO
/*

    1. check if items are available
    2. insert order
    3. insert productOrders
*/

CREATE OR ALTER PROCEDURE spFetchProducts
AS BEGIN
    SELECT *, 
    [gallery] = (
        SELECT CONCAT('[', STRING_AGG(CONCAT('"', image_name, '"'), ', '), ']')
        FROM Images i 
        WHERE i.product_id = p.product_id
    )
    FROM Products p
    WHERE p.available = 1
END
GO



CREATE OR ALTER PROCEDURE spSubmitOrder
    @product_ids ProductIdTableType READONLY,
    @customer CustomerTableType READONLY
AS BEGIN
    IF EXISTS (SELECT NULL FROM dbo.fnCheckProductAvailability(@product_ids))
    BEGIN
        SELECT [message] = 'one or more items unavailable'
    END
    ELSE BEGIN
        DECLARE @customer_id INT
        EXEC @customer_id = spInsertCustomer @CustomerType = @customer

        DECLARE @item_count INT = (SELECT COUNT(*) FROM product_ids)
        DECLARE @order_id INT

        EXEC @order_id = spInsertOrder 
            @customer_id = @customer_id, @item_count = @item_count

        EXEC spInsertProductOrders 
            @product_ids = @product_ids, @order_id = @order_id
    END
END
GO

/****************************** SEEDING DATA **********************************/

BULK INSERT Images
FROM '/usr/src/data/image_data.csv'
WITH (
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n',
    FIRSTROW = 2
);
GO

BULK INSERT Products
FROM '/usr/src/data/product_data.csv'
WITH (
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n',
    FIRSTROW = 2
);
GO