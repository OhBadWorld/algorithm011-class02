
## 学习笔记

### 个人总结
#### 位运算

常用要点
1. 将 x 最右边的 n 位清零：x& (~0 << n)
2. 获取 x 的第 n 位值（0 或者 1）： (x >> n) & 1
3. 获取 x 的第 n 位的幂值：x& (1 <<n)
4. 仅将第 n 位置为 1：x | (1 << n)
5. 仅将第 n 位置为 0：x & (~ (1 << n))
6. 将 x 最高位至第 n 位（含）清零：x& ((1 << n) -1)
7. 将第 n 位至第 0 位（含）清零：x& (~ ((1 << (n + 1)) -1))

实战位运算要点
• 判断奇偶：
x % 2 == 1 —> (x & 1) == 1
x % 2 == 0 —> (x & 1) == 0
• x >> 1 —> x / 2. 
即： x = x / 2; —> x = x >> 1;
mid = (left + right) / 2; —> mid = (left + right) >> 1;
• X = X & (X-1) 清零最低位的 1 • X & -X => 得到最低位的 1 • X & ~X => 0

#### 布隆过滤器
相当于是给数据做缓存，一个查询请求过来，先布隆过滤器查询，有结果，就去查数据库，找到具体结果，如果没有结果，就不查数据库。
布隆过滤器有结果，说明数据库里可能有结果
布隆过滤器没有结果，说明数据库里一定没有结果

优点是空间效率和查询时间都远远超过一般的算法， 
缺点是有一定的误识别率和删除困难。

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

最好的掌握途径，就是多做
