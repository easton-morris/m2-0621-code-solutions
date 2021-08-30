SELECT "countries"."name" AS "countryName",
  COUNT("cities")
  FROM "cities"
  JOIN "countries" USING ("countryId")
GROUP BY "countryId";
