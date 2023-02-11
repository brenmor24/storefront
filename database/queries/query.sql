USE Marketplace
GO

DECLARE @TempTable CustomerTableType
INSERT INTO @TempTable VALUES (
    'John',
    'Smith',
    'johnsmith@gmail.com',
    '0123456789',
    '1234 Nowhere Ln',
    '',
    'Oxford',
    'OH',
    '45056'
)

EXEC spInsertCustomer @CustomerType = @TempTable

EXEC spInsertOrder @customer_id = 1, @item_count = 3


DECLARE @product_id_list ProductIdTableType

INSERT INTO @product_id_list VALUES (2), (3)

SELECT * FROM dbo.fnCheckProductAvailability(@product_id_list)

USE [Marketplace]
GO

SELECT * FROM Products
SELECT * FROM Images
SELECT * FROM Customers 

INSERT INTO Images VALUES
(1, 'hat_1.png'), (1, 'hat_2.png'), (1, 'hat_3.png'),
(1, 'hat_4.png'), (1, 'hat_5.png'), (1, 'hat_6.png'),
(2, 'shirt_1.png'), (2, 'shirt_2.png'), (2, 'shirt_3.png'),
(2, 'shirt_4.png'), (2, 'shirt_5.png'), (2, 'shirt_6.png'),
(3, 'levis_1.png'), (3, 'levis_2.png'), (3, 'levis_3.png'),
(3, 'levis_4.png'), (3, 'levis_5.png'), (3, 'levis_6.png')

SELECT * FROM Images
GO

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

EXEC spFetchProducts

SELECT JSON_QUERY(CONCAT('[', STRING_AGG(CONCAT('"', image_name, '"'), ', '), ']')) FROM Images i 

DELETE FROM Images

SELECT TOP 65 * FROM Images

UPDATE Products SET primary_image='unicorn.png'
WHERE primary_image='unicorn.jpeg'


USE Marketplace
GO
SELECT TOP 20 * From Products