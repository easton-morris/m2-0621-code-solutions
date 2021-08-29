SELECT "firstName",
       "lastName",
       "films"."title" AS "starredIn"
FROM "actors"
JOIN "castMembers" USING ("actorId")
JOIN "films" USING ("filmId")
WHERE "title" = 'Jersey Sassy';
