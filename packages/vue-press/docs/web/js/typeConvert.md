# JavaScript中的类型转换规则
## [] == ![]
**技巧就是优先转化为Number类型：**
* 1、!优先级高于==  
  过程：![] -> !(Boolean([])) -> !true -> false  
  结果：[] == false
* 2、如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值  
  过程：false -> Number(false) -> 0  
  结果：[] == 0
* 3、有一边为对象，另一边不是，则调用对象的valueOf()方法，如果得到的值不是基本类型值，则基于返回值再调用toString方法（这个过程即ToPrimitive）  
  过程：ToPrimitive([]) -> ''  
  结果：'' == 0
* 4、基础类型的判断得到 [] == ![]
