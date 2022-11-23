/*ej 1*/
select title as 'titlo serie', genres.name as 'titulo genero' from series inner join genres on genre_id = genres.id ;
SELECT 
	episodes.title as 'nombre_episodio', 
	actors.first_name as 'nombre_actor',
	actors.last_name as 'apellido_actor' 
from actors
	inner join actor_episode 
	on actor_episode.actor_id = actors.id
	inner join episodes
	on actor_episode.episode_id = episodes.id; 
	

/*ej 2*/
SELECT 
	DISTINCT actors.first_name as Nombre,
				actors.last_name as Apellido
from actors 
	inner join actor_movie 
	on actor_movie.actor_id = actors.id 
	inner join movies 
	on actor_movie.movie_id = movies.id;

/*ej 3*/
SELECT 
	movies.title as 'Titulo pelicula',
	COALESCE(genres.name,'No tiene genero') as genero
from movies
	left join genres 
	ON genres.id = movies.genre_id;

/*ej 4*/

	