SELECT "firstName",
       "lastName",
       "amount"
FROM "customers"
JOIN "payments" USING ("customerId")
ORDER BY "amount" DESC
LIMIT 10;
