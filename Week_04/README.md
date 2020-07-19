## 学习笔记

### 个人总结
#### 深度优先

```
visited = set() 
def dfs(node, visited): 
if node in visited: # terminator 
# already visited 
return 
 visited.add(node) 
# process current node here. 
...
for next_node in node.children(): 
if not next_node in visited: 
 dfs(next node, visited)
```
#### 广度优先
```
def BFS(graph, start, end): 
 queue = [] 
 queue.append([start]) 
 visited.add(start) 
while queue: 
 node = queue.pop() 
 visited.add(node) 
 process(node) 
 nodes = generate_related_nodes(node) 
 queue.push(nodes) 
# other processing work 
...
```

#### 贪心算法
在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法

贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能

区别
1. 贪心：当下做局部最优判断
2. 回溯：能够回退
3. 动态规划：最优判断 + 回退

贪心算法解决一些最优化问题，如：求图中的最小生成树，求哈弗曼编码等
一旦一个问题可以通过贪心法来解决，那么贪心法一般是解决这个问题的最好办法。
由于贪心法的高效性以及其所求的答案比较接近最优结果，贪心法也可以用作辅助算法或者直接解决一些要求结果不特别精确的问题

何种情况下用到贪心算法？
1.问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解。这种子问题最优解称为最优子结构。
2.贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，
不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前
进行选择，有回退功能。    

#### 二分查找
前提：
1. 目标函数单调性（单调递增或者递减）
2. 存在上下界（bounded）
3. 能够通过索引访问（index accessible)

```
left, right = 0, len(array) - 1
while left <= right:
 mid = (left + right) / 2
if array[mid] == target: # find the target!! 
break or return result 
 elif array[mid] < target:
 left = mid + 1
else:
 right = mid - 1
```
最后在个人实际做题中，还是理解的不够深刻，还是比较生硬，还需要不断的练习
