```javascript
// Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("65576c1671e52c17a494f156")}, {"$inc": {"counter": -1}});
```