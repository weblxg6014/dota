USE dota2;
CREATE TABLE dota_newimg(
    id INT PRIMARY KEY AUTO_INCREMENT,
    imgId INT,
    img_url VARCHAR(255)
)

INSERT INTO dota_newimg VALUES(null,1,"http://176.30.9.205:3000/img/newimg/new1.png");
INSERT INTO dota_newimg VALUES(null,1,"http://176.30.9.205:3000/img/newimg/new2.png");
INSERT INTO dota_newimg VALUES(null,2,"http://176.30.9.205:3000/img/newimg/new3.jpg");
INSERT INTO dota_newimg VALUES(null,2,"http://176.30.9.205:3000/img/newimg/new4.jpg");