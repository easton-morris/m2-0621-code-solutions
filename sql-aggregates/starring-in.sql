SELECT "categories"."name" AS "filmCategory",
  COUNT("filmId") AS "totalMovies"
  FROM "categories"
  JOIN "filmCategory" USING ("categoryId")
  JOIN "films" USING ("filmId")
  JOIN "castMembers" USING ("filmId")
  JOIN "actors" USING ("actorId")
  WHERE "actors"."firstName" = 'Lisa'
        AND "actors"."lastName" = 'Monroe'
GROUP BY "categories"."name";
