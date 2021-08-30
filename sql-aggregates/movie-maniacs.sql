SELECT "customers"."firstName",
       "customers"."lastName",
  SUM("payments"."amount") AS "totalPaid"
  FROM "customers"
  JOIN "payments" USING ("customerId")
  GROUP BY "customerId"
ORDER BY "totalPaid" DESC;
