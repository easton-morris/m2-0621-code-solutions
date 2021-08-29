SELECT "line1",
       "district",
       "city"."name" AS "cityName",
       "country"."name" AS "countryName"
FROM "addresses"
JOIN "cities" AS "city" USING ("cityId")
JOIN "countries" AS "country" USING ("countryId");
