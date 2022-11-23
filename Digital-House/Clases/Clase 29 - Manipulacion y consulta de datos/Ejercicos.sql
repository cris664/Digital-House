/*ej 1*/
INSERT into genres (name,ranking,active) values("Investigación",13,1);
UPDATE genres SET name = "Investigación Cientifica" where name = "Investigación"; 
DELETE  from genres where name = "Investigación Cientifica";
/*ej 2*/
SELECT * from movies;
SELECT title as titulo from series as series;
SELECT first_name,last_name,rating from actors where rating = 7.5; 
SELECT title, rating, awards from movies where rating > 7.5 and awards > 2;
SELECT title , rating from movies order by rating asc;
/*ej 3*/ 
SELECT title from movies limit 3;
SELECT title, rating from movies  order by rating desc limit 5;
SELECT title, rating from movies  order by rating desc limit 5 OFFSET 5;
SELECT first_name,last_name  from actors limit 10;
SELECT first_name,last_name  from actors limit 10 OFFSET 20;
/*Ej 4*/
SELECT title,rating from movies WHERE title like "%Harry Potter%";
SELECT first_name, last_name  from actors WHERE first_name LIKE "%Sam%";
SELECT title,release_date  from movies WHERE EXTRACT(YEAR from release_date)  BETWEEN '2004' and  '2008'; 

