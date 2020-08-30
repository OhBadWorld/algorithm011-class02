
## 毕业总结

###  清晰了数据结构中的结构
1. 一维：
基础：数组 array (string), 链表 linked list
高级：栈 stack, 队列 queue, 双端队列 deque, 集合 set, 映射 map (hash or map), etc
2. 二维：
基础：树 tree, 图 graph
高级：二叉搜索树 binary search tree (red-black tree, AVL), 堆 heap, 并查集 disjoint set, 字典树 Trie, etc
3. 特殊：
位运算 Bitwise, 
布隆过滤器 BloomFilter
LRU Cache

ps.当你在使用一维数组解决不了问题的时候，就需要升维来解决

### 思想方面的提升
 1. 杜绝人肉递归低效、很累
 2. 找到最近最简方法，将其拆解成可重复解决的问题
 3. 数学归纳法思维

### 学习方法上的提升
get到了新技能，五毒神掌
第一遍：不要死磕，要看代码学习（一定要看国际版的高票回答）
第二遍：自己写
第三遍：24小时后
第四遍：一周后（时间紧的话，就只需要看脑图）
第五遍：面试前

ps.在真正做题的过程中，对新手来说，解决不了，很正常，不要死磕，深有体会，先承认自己在这方面的短处，然后奋起直追就可以了，不要怂，干就完事了

#### 排序算法
1. 比较类排序： 
通过比较来决定元素间的相对次序，由于其时间复杂度不能突破 
O(nlogn)，因此也称为非线性时间比较类排序。 
2. 	 非比较类排序： 
不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时
间下界，以线性时间运行，因此也称为线性时间非比较类排序。

### 初级排序 - O(n^2)
1. 选择排序（Selection Sort） 
每次找最小值，然后放到待排序数组的起始位置。

2. 插入排序（Insertion Sort） 
从前到后逐步构建有序序列；对于未排序数据，在已排序序列中从后
向前扫描，找到相应位置并插入。

3. 冒泡排序（Bubble Sort） 
嵌套循环，每次查看相邻的元素如果逆序，则交换。

### 高级排序 - O(N*LogN)
• 快速排序（Quick Sort） 
数组取标杆 pivot，将小元素放 pivot左边，大元素放右侧，然后依次
对右边和右边的子数组继续快排；以达到整个序列有序。
```
// JavaScript
const quickSort = (nums, left, right) => {
  if (nums.length <= 1) return nums
  if (left < right) {
    index = partition(nums, left, right)
    quickSort(nums, left, index-1)
    quickSort(nums, index+1, right)
  }
}
      
const partition = (nums, left, right) => {
  let pivot = left, index = left + 1
  for (let i = index; i <= right; i++) {
    if (nums[i] < nums[pivot]) {
      [nums[i], nums[index]] = [nums[index], nums[i]]
      index++
    }
  }
  [nums[pivot], nums[index-1]] = [nums[index-1], nums[pivot]]
  return index -1
}
```


### 高级排序 - O(N*LogN)
• 归并排序（Merge Sort）— 分治 
	 1. 把长度为n的输入序列分成两个长度为n/2的子序列； 
	 2. 对这两个子序列分别采用归并排序； 
	 3. 将两个排序好的子序列合并成一个最终的排序序列。
```
// JavaScript
const mergeSort = (nums) => {
  if (nums.length <= 1) return nums
  let mid = Math.floor(nums.length/2), 
      left = nums.slice(0, mid), 
      right = nums.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

const merge(left, right) => {
  let result = []
  while(left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift()
  }
  while(left.length) result.push(left.shift())
  while(right.length) result.push(right.shift())
  return result
}
```
最后，多说两句
最好的掌握途径，就是多做，加油干就完事了。
