# Models

it's a simple interface to localStorage SQL friendly.

## Insert
```
ProductModel.insert({
    'name': 'Milk',
    'price': 4.00 
});
```

## Select
Select is a simple method, works only with 'AND' conditions. We should improve this in future

```
ProductModel.select({ 'price': 4.00 });
```

## Update

```
const condition = { 'name': 'Milk' };
ProductModel.update(condition, { 'price': 5.50 });
```

## Delete 

```
ProductModel.delete({ 'name': 'Milk' });
```

## SysModel

While Product and List Models got the same behavior, Sys model is different because store a key/value relationship

### Insert
```
SysModel.insert('hello', 'world');
```

### Select
```
SysModel.select('hello'); // returns 'world';
```

### Update
```
SysModel.update('hello', 'js');
```

### Delete
```
SysModel.delete('hello');
```
