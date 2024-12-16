# MongoDB $inc Operator Bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The bug arises from incorrectly using `$inc` to decrement a counter, leading to unexpected results if the counter is already zero or negative. 

## Bug Description
The original code attempts to decrement a counter using `$inc`.  However, if the counter is zero or negative, this will lead to an incorrect result.  This example showcases that problem. 

## Solution
The solution involves using the `$max` operator to ensure the counter never goes below zero.  This ensures that the decrement operation is only performed if the counter is greater than zero. 
