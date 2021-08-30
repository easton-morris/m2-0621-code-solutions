SELECT "filmId",
       COUNT(*) AS "totalInv"
  FROM "inventory"
  GROUP BY "filmId";
