---
title: 'Number Analysis'
description: 'A curricular review.'
publishDate: '2026-05-12 19:01:00'
tags:
  - Math
---
# 计算方法复习
## 多元函数误差传播公式
$$
\varepsilon(z)\leq\Bigg|\frac{\partial z}{\partial x}\Bigg|\varepsilon(x)+\Bigg|\frac{\partial z}{\partial y}\Bigg|\varepsilon(y)
$$
例如下题：
> 设  x = 1.025,  y = 2.301 均具有 4 位有效数字，给定函数
> $$
> z={e}^{xy}+\sin{(2xy^2+3\frac{x}{y})}
> $$
> 试分析计算 z 的绝对误差限、相对误差限以及有效数字位数。

### 第一步：确定 x, y 的误差限
4位有效数字的误差限为末位的半个单位：
$$
\varepsilon(x) = 0.0005, \quad \varepsilon(y) = 0.0005
$$

### 第二步：计算各中间量的值
$$
xy=1.025×2.301=2.35853
$$
$$
xy^2 = xy \cdot y = 2.35853 \times 2.301 = 5.42607 
$$
$$
\frac{x}{y} = \frac{1.025}{2.301} = 0.44546 
$$
$$
xy^2 + 3\frac{x}{y} = 2 \times 5.42607 + 3 \times 0.44546 = 10.85214 + 1.33638 = 12.188522 
$$
$$
z = e^{2.35853} + \sin(12.18852) 
$$
$$
e^{2.35853} \approx 10.5737 
$$
$$
\sin(12.18852) \approx \sin(12.18852) \approx -0.4941 
$$
$$
z \approx 10.5737 + (-0.4941) = 10.0796
$$

### 第三步：用误差传播公式求绝对误差限

误差传播公式：

$$ \varepsilon(z) = \left|\frac{\partial z}{\partial x}\right|\varepsilon(x) + \left|\frac{\partial z}{\partial y}\right|\varepsilon(y) $$

#### 计算偏导数

令  
$$ u = xy, \quad v = 2xy^2 + 3\frac{x}{y}, \quad z = e^u + \sin v $$

则：

$$ \frac{\partial z}{\partial x} = e^{xy} \cdot y + \cos(v)\left(2y^2 + \frac{3}{y}\right) $$

$$ \frac{\partial z}{\partial y} = e^{xy} \cdot x + \cos(v)\left(4xy - \frac{3x}{y^2}\right) $$

#### 代入数值

已知：  
$$ e^{xy} = 10.5737, \quad \cos(12.18852) \approx 0.8693 $$

计算 $\frac{\partial z}{\partial x}$：

$$
\begin{aligned}
\frac{\partial z}{\partial x} &= 10.5737 \times 2.301 + 0.8693 \times \left(2 \times 2.301^2 + \frac{3}{2.301}\right) \\
&= 24.330 + 0.8693 \times (10.589 + 1.304) \\
&= 24.330 + 0.8693 \times 11.893 \\
&= 24.330 + 10.337 = 34.667
\end{aligned}
$$

计算 $\frac{\partial z}{\partial y}$：

$$
\begin{aligned}
\frac{\partial z}{\partial y} &= 10.5737 \times 1.025 + 0.8693 \times \left(4 \times 1.025 \times 2.301 - \frac{3 \times 1.025}{2.301^2}\right) \\
&= 10.838 + 0.8693 \times (9.431 - 0.581) \\
&= 10.838 + 0.8693 \times 8.850 \\
&= 10.838 + 7.693 = 18.531
\end{aligned}
$$

#### 绝对误差限

$$ \varepsilon(z) = 34.667 \times 0.0005 + 18.531 \times 0.0005 = 0.01733 + 0.00927 = 0.0266 $$

$$ \boxed{\varepsilon(z) = 0.0266} $$

### 第四步：相对误差限

$$ \varepsilon_r(z) = \frac{\varepsilon(z)}{|z|} = \frac{0.0266}{10.0796} \approx 0.00264 = 0.264\% $$

$$ \boxed{\varepsilon_r(z) \approx 0.264\%} $$


### 第五步：有效数字位数

由 $\varepsilon_r \approx 0.264\%$，有效数字位数 $n$ 满足：

$$ \frac{1}{2} \times 10^{1-n} \ge \varepsilon(z) = 0.0266 $$

$$ 10^{1-n} \ge 0.0532 \implies 1-n \ge \log_{10}(0.0532) \approx -1.274 $$

$$ n \le 2.274 $$

因此 $z \approx 10.08$ 具有 **4 位有效数字**。

$$ \boxed{z \approx 10.08 \text{ 具有 } \mathbf{4} \text{ 位有效数字}} $$

## Horner 算法（嵌套乘法）

### 核心思想

Horner 算法通过**嵌套乘法**（重新括号化）消除多项式求值中的重复计算，显著减少乘法次数。


### 简单例子对比

#### 普通写法（直接计算）

$$f(x) = 5x^4 + 3x^3 + 2x^2 + 4x + 1$$

逐项计算，需要 **10 次乘法**：

$$5 \cdot x \cdot x \cdot x \cdot x \;+\; 3 \cdot x \cdot x \cdot x \;+\; 2 \cdot x \cdot x \;+\; 4 \cdot x \;+\; 1$$

#### Horner 改写（层层提取 $x$）

$$f(x) = ((((5)x + 3)x + 2)x + 4)x + 1$$

从最内层括号开始计算，只需 **4 次乘法 + 4 次加法**。

### 算法步骤（$n$ 次多项式）

对于多项式  
$$f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$$

在 $x = x_0$ 处的求值过程：

### 递推公式

$$
\begin{cases}
b_n = a_n \\[4pt]
b_k = a_k + b_{k+1} \cdot x_0, \quad k = n-1, n-2, \ldots, 0
\end{cases}
$$

最终，**$b_0 = f(x_0)$**。

## 二分法迭代次数推导

每次二分后区间长度减半，第 $n$ 次迭代后的误差满足：

$$ |x_n - x^*| \leq \frac{b-a}{2^n} $$

其中 $[a, b]$ 为初始区间，$x^*$ 为精确根，$x_n$ 为第 $n$ 次迭代后的近似根。

## 牛顿法（切线法）

在当前点 $x_n$ 处作函数 $f(x)$ 的切线，用**切线与 $x$ 轴的交点**作为下一个近似根 $x_{n+1}$。

几何意义：用切线近似曲线，将非线性方程的求根问题转化为线性方程求解。

$$ \boxed{x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}} $$

## 割线法（牛顿法的变体）

当 $f'(x)$ 难以计算或表达式复杂时，用**差商**近似代替导数，避免求导运算。

用两点 $(x_{n-1}, f(x_{n-1}))$ 和 $(x_n, f(x_n))$ 确定的割线与 $x$ 轴的交点作为下一个近似根 $x_{n+1}$。

$$ \boxed{x_{n+1} = x_n - \frac{f(x_n)(x_n - x_{n-1})}{f(x_n) - f(x_{n-1})}} $$

## 迭代法收敛性判别准则

### 准则一：谱半径（充要条件）

$$ \boxed{\rho(B) < 1 \iff \text{迭代收敛}} $$

其中 $\rho(B)$ 是迭代矩阵 $B$ 的**谱半径**，定义为最大特征值绝对值：

$$ \rho(B) = \max_i |\lambda_i| $$

#### 解读

| 条件 | 结论 |
|------|------|
| $\rho(B) < 1$ | 收敛，且 $\rho(B)$ 越小收敛越快 |
| $\rho(B) \geq 1$ | 发散 |

#### 优缺点

- ✅ **充要条件**，理论完备
- ❌ 需要计算特征值，**计算量大**，不便于实际快速判断

### 准则二：严格对角占优（充分条件）

$$ \boxed{|a_{ii}| > \sum_{j \neq i} |a_{ij}| \quad \forall i \implies \text{Jacobi 和 Gauss-Seidel 均收敛}} $$

#### 判断方法

逐行检验：对角线元素的绝对值是否 **严格大于** 同行其他元素绝对值之和。

#### 示例

$$
A = \begin{bmatrix}
4 & 1 & 1 \\
1 & 3 & 1 \\
1 & 1 & 5
\end{bmatrix} 
$$

逐行检验：

| 行 | 对角元 \|a_ii\| | 其余元素和 | 是否满足 |
|----|------------------|------------|----------|
| 1  | 4                | 1+1=2      | ✅ 4>2   |
| 2  | 3                | 1+1=2      | ✅ 3>2   |
| 3  | 5                | 1+1=2      | ✅ 5>2   |

**结论**：$A$ 严格对角占优 → Jacobi 和 Gauss-Seidel 均收敛。

#### 注意

- 仅为**充分条件**：不满足严格对角占优的矩阵**不一定发散**
- 实际应用中非常方便，只需观察矩阵元素即可快速判断

### 准则三：对称正定（充分条件，仅对 Gauss-Seidel）

$$ \boxed{A \text{ 对称正定} \implies \text{Gauss-Seidel 收敛}} $$

#### 对称正定矩阵的两个条件

1. **对称**：$A = A^T$
2. **正定**：所有特征值 $> 0$（或等价地，对所有非零向量 $x$，有 $x^T A x > 0$）

#### 重要说明

- 此条件**只保证 Gauss-Seidel 收敛**
- 对 Jacobi 迭代**无法保证**收敛（即使 $A$ 对称正定，Jacobi 也可能发散）