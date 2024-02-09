# Story: Renting a car

## Use case01
As a system user
In order to get an available car in specific category
Given a car category containing 3 different cars
When i check if there's a car available
Then it should choose randomly a car from category choosen

## Use case02

As a System user
In order to calculate the final renting price
Given a customer who wants to rent a car for 5 days
And he is 50 years old
When he chooses a car category that costs $37.6 per day
Then i must add the TAX of gis age which is 30% to the car category price.
Then the final formula will be `((price per day * TAX) * number of days)`
And the final result will be `((37.6 * 1.3) * 5)= 244.4`
And the final price will be printed in Brazilian portuguese format as "R$ 244,40"

## User case03

As a system user
In order to register a renting transaction
Given a registered cutomer who is 50 years old
And a car model that costs $37.6 per day
And a delivery date that is for 05days behind
And given an actual date `new Date.now()`