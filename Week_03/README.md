
## 学习笔记

### 个人总结
1. 递归
自己调用自己，三步走：
  a. terminator 跳出条件
  b. process current logic 当前处理过程
  c. drill down  进入下层，调用自身
2. 分治
将一个难以直接解决的大问题，分割成一些规模较小的相同问题，以便各个击破，一分为二，分而治之
3. 回溯
回溯法采用试错的思想，它尝试分步的去解决一个问题。在分步解决问题的过程中，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，它将取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问题的答案。

注意点：
1. 不要人肉进行递归(最大误区)
2. 找到最近最简方法，将其拆解成可重复解决的问题(重复子问题)
3. 数学归纳法思维
