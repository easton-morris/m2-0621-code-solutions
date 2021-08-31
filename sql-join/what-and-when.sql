SELECT "releaseYear",
       "cat"."name" AS "category",
       "title"
FROM "films"
JOIN "filmCategory" USING ("filmId")
JOIN "categories" AS "cat" USING ("categoryId")
WHERE "title" = 'Boogie Amelie';
