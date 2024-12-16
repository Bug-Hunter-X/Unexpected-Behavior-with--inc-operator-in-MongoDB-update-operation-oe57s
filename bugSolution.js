```javascript
// Correct usage of $inc operator with $max to handle negative values
db.collection('myCollection').updateOne({"_id": ObjectId("65576c1671e52c17a494f156")}, {"$inc": {"counter": -1}, $max:{"counter": 0}});
```