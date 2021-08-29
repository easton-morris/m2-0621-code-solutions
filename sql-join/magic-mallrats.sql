SELECT "firstName",
       "lastName",
       "film"."title" AS "filmTitle"
FROM "customers"
JOIN "rentals" USING ("customerId")
JOIN "inventory" USING ("inventoryId")
JOIN "films" AS "film" USING ("filmId")
WHERE "title" = 'Magic Mallrats';
