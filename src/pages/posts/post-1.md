---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Android TODO App Learning Routing'
author: 'JerryMain'
pubDate: 2025-04-11
image:
  url: "https://docs.astro.build/default-og-image.png"
  alt: "The word astro against an illustration of planets and stars."
tags: ["android", "kotlin"]
---
# Android TODO App · 每日学习计划

> 目标：用 Kotlin + Jetpack Compose 做一个有丝滑页面切换动画的 TODO APP  
> 总时长：30 天 · 每天 1.5–2 小时  
> 评判原则：每天结束前对照「通过标准」自测，全部通过再进入下一天

---

## 使用说明

- ✅ 每项任务完成后打勾
- ❌ 通过标准未达到 → 当天重做，不要强行推进
- 🔁 卡超过 1 小时 → 把报错/代码截图发给 AI 寻求帮助，不要死磕

---

# 第一阶段：Kotlin 基础语法（第 1–7 天）

---

## Day 1 · 环境搭建 + Kotlin 初体验

### 今天做什么
1. 下载并安装 Android Studio：https://developer.android.com/studio
2. 安装完成后，新建一个 **Empty Activity** 项目（语言选 Kotlin）
3. 点击运行，确认模拟器或真机能跑起来「Hello Android」
4. 打开 https://play.kotlinlang.org/koans，完成 **Introduction** 章节前 3 题

### 通过标准
- [ ] Android Studio 安装成功，模拟器能正常启动
- [ ] 手机/模拟器屏幕上能看到「Hello Android」字样
- [ ] Kotlin Koans 的 Hello World、Named arguments、Default arguments 三题全部绿勾
- [ ] 能说出 `val` 和 `var` 的区别是什么

---

## Day 2 · 变量、函数、字符串

### 今天做什么
1. Kotlin Koans → Introduction 章节剩余题目全部完成
2. 在 Android Studio 新建一个 Kotlin 文件（不是 Activity），手写以下练习：
   - 写一个函数，接收一个名字，返回「你好，XXX！」
   - 写一个函数，接收两个数字，返回较大的那个（不用 `if`，用 `when` 或三目）
   - 用字符串模板 `${}` 拼接一段自我介绍

### 通过标准
- [ ] Kotlin Koans Introduction 章节全部完成（绿勾）
- [ ] 能不看教程，默写出「带默认参数的函数」语法
- [ ] 字符串模板练习无报错，输出正确
- [ ] 理解什么时候用 `val`，什么时候用 `var`（能举例说明）

---

## Day 3 · 类、data class、空安全

### 今天做什么
1. Kotlin Koans → **Classes** 章节全部完成
2. 手写练习：
   ```kotlin
   data class Todo(val id: Int, val title: String, val isDone: Boolean = false)
   ```
   - 创建 3 个 Todo 对象
   - 用 `copy()` 把其中一个的 `isDone` 改为 true
   - 打印每个 Todo 的内容
3. 练习空安全：
   - 写一个可能返回 null 的函数
   - 用 `?.` 安全调用，用 `?: ` 设置默认值
   - 故意用 `!!` 触发一次 NullPointerException，观察报错

### 通过标准
- [ ] Kotlin Koans Classes 章节全部完成
- [ ] 能默写 `data class` 语法，包括主构造函数和默认参数
- [ ] `copy()` 练习输出正确，原对象未被修改（不可变性）
- [ ] 能解释 `?.` 和 `!!` 的区别，知道什么情况下会崩溃

---

## Day 4 · Lambda 和高阶函数

### 今天做什么
1. Kotlin Koans → **Lambdas** 章节全部完成
2. 手写练习：
   - 创建一个 `List<Todo>`（至少 5 个，有些 isDone=true，有些 false）
   - 用 `filter` 筛选出未完成的
   - 用 `map` 把所有标题转为大写
   - 用 `forEach` 逐个打印
   - 用 `sortedBy` 按 id 排序
3. 写一个高阶函数：接收一个 `(Todo) -> Boolean` 的参数，返回符合条件的 Todo 列表

### 通过标准
- [ ] Kotlin Koans Lambdas 章节全部完成
- [ ] `filter` / `map` / `forEach` 练习输出正确
- [ ] 能不看资料写出一个接收 Lambda 参数的函数
- [ ] 理解 `it` 是什么（单参数 Lambda 的隐式名称）

---

## Day 5 · 集合、解构、when 表达式

### 今天做什么
1. Kotlin Koans → **Collections** 章节全部完成
2. 手写练习：
   - 用 `when` 表达式写一个函数，输入优先级数字（1/2/3），返回「高/中/低」
   - 用解构 `val (id, title) = todo` 拆解 data class
   - 用 `groupBy` 把 Todo 列表按 isDone 分组
   - 用 `sumOf` / `count` 统计未完成数量

### 通过标准
- [ ] Kotlin Koans Collections 章节全部完成
- [ ] `when` 表达式练习覆盖了 else 分支，无编译警告
- [ ] `groupBy` 能正确分成两组，key 为 true/false
- [ ] 能解释解构声明的原理（背后是 `component1()` / `component2()`）

---

## Day 6 · 协程基础

### 今天做什么
1. 阅读：https://kotlinlang.org/docs/coroutines-basics.html （前三节）
2. 手写练习（在 Android Studio 的普通 Kotlin 文件里）：
   - 用 `runBlocking` 启动一个协程，在里面 `delay(1000)` 后打印「完成」
   - 用 `launch` 同时启动两个任务，观察执行顺序
   - 写一个 `suspend fun` 模拟网络请求（delay 500ms 后返回数据）
3. 理解概念：协程 vs 线程的区别，`suspend` 关键字的作用

### 通过标准
- [ ] 能在 Android Studio 运行含协程的代码，无报错
- [ ] 能解释为什么两个 `launch` 的执行顺序是「并发」而非「顺序」
- [ ] 能说出 `suspend` 函数只能在协程或另一个 `suspend` 函数里调用
- [ ] 知道 Room 数据库操作为什么需要协程

---

## Day 7 · 第一阶段复习 + 综合练习

### 今天做什么
**不看任何资料**，从头手写以下程序（在普通 Kotlin 文件里）：

```
需求：
1. 定义 data class Todo（id, title, isDone, priority 1-3）
2. 创建一个包含 6 个 Todo 的列表（混合已完成/未完成，不同优先级）
3. 函数 getPending()：返回未完成的 Todo，按优先级升序排列
4. 函数 getSummary()：返回字符串「共 X 项，已完成 Y 项，未完成 Z 项」
5. 函数 complete(id)：返回一个新列表，指定 id 的 Todo 标记为已完成
6. 用 when 表达式把优先级数字转换成文字
7. 全部打印出来验证
```

### 通过标准
- [ ] 全程不看资料，独立完成，最多查一次语法
- [ ] 程序运行无报错，输出结果正确
- [ ] `complete()` 使用 `copy()` 而非修改原对象（不可变）
- [ ] 代码能给别人看懂（命名清晰，无无意义的变量名如 a/b/x）

> ✅ 第一阶段完成！明天开始 Jetpack Compose。

---

# 第二阶段：Jetpack Compose UI（第 8–18 天）

---

## Day 8 · Compose 基础概念 + 第一个 Composable

### 今天做什么
1. 阅读官方文档：https://developer.android.com/jetpack/compose/mental-model （思维模型）
2. 在昨天的 Android Studio 项目里：
   - 打开 `MainActivity.kt`，找到已有的 `@Composable` 函数
   - 修改它，显示「我的第一个 Compose UI」
   - 新建一个 `@Composable fun TodoItem(title: String, isDone: Boolean)` 
   - 在里面用 `Text` 显示标题，`isDone` 为 true 时标题加删除线

### 通过标准
- [ ] 能解释什么是「声明式 UI」，和传统命令式 UI 的区别
- [ ] `@Composable` 注解能默写，知道它的函数命名规范（大驼峰）
- [ ] `TodoItem` 在模拟器上正确显示，包括删除线效果
- [ ] 知道 Composable 函数不能有返回值（Unit）

---

## Day 9 · 布局：Column、Row、Box

### 今天做什么
1. 完成官方 Codelab：Jetpack Compose basics（前半部分）  
   https://developer.android.com/codelabs/jetpack-compose-basics
2. 手写练习：构建一个 `TodoCard` 组件，布局如下：
   ```
   ┌─────────────────────────────────┐
   │ ☐  买牛奶                    高 │
   │    今天 14:30                    │
   └─────────────────────────────────┘
   ```
   - 左侧：复选框图标 + 标题（Column）
   - 右侧：优先级标签
   - 底部：时间文字（小字，灰色）

### 通过标准
- [ ] `Column`、`Row`、`Box` 能熟练嵌套，布局符合设计
- [ ] 知道 `Modifier` 是什么，能用 `padding`、`fillMaxWidth`、`weight`
- [ ] `TodoCard` 在模拟器上渲染正确，文字无重叠
- [ ] 能解释 `Column` 和 `Row` 的 `Arrangement` 和 `Alignment` 参数区别

---

## Day 10 · 状态管理：remember + mutableStateOf

### 今天做什么
1. 阅读：https://developer.android.com/jetpack/compose/state
2. 手写练习：
   - 让 `TodoCard` 上的复选框可以点击，点击后切换 `isDone` 状态
   - 添加一个计数器，显示「已勾选 X 项」，实时更新
   - 故意把 `remember` 去掉，观察状态不保存的问题，再加回来

### 通过标准
- [ ] 点击复选框，UI 立即更新（不需要刷新页面）
- [ ] 计数器数字在勾选/取消时正确增减
- [ ] 能解释为什么去掉 `remember` 后状态会重置
- [ ] 理解「单一数据源」原则：状态在哪里，UI 就在哪里更新

---

## Day 11 · LazyColumn：滚动列表

### 今天做什么
1. 阅读：https://developer.android.com/jetpack/compose/lists
2. 手写练习：
   - 创建一个包含 20 个假 Todo 的列表
   - 用 `LazyColumn` + `items()` 渲染出来
   - 每项之间加 `8dp` 间距
   - 列表顶部加一个标题「我的任务（20）」
   - 测试滚动是否流畅

### 通过标准
- [ ] 20 条数据全部渲染，滚动流畅无卡顿
- [ ] 能说出 `LazyColumn` 和 `Column` 的核心区别（懒加载）
- [ ] `items()` 的 `key` 参数已设置（`key = { it.id }`），知道为什么要设置
- [ ] 列表顶部标题随滚动一起消失（不是固定的）

---

## Day 12 · Scaffold + TopAppBar + FAB

### 今天做什么
1. 用 `Scaffold` 重构昨天的列表页，加入：
   - `TopAppBar`：标题「TODO」，右上角一个搜索图标（暂时不实现功能）
   - `FloatingActionButton`：右下角「+」按钮，点击后弹出 `SnackBar` 提示「新建功能即将加入」
   - `SnackbarHost` 绑定到 Scaffold

### 通过标准
- [ ] 页面整体结构符合 Material 3 规范（TopBar + 内容区 + FAB）
- [ ] FAB 点击后 SnackBar 正常弹出，3 秒后消失
- [ ] TopAppBar 在列表滚动时保持固定在顶部
- [ ] 内容区不被 TopBar 或 FAB 遮挡（`padding` 处理正确）

---

## Day 13 · TextField + 表单输入

### 今天做什么
1. 新建一个 `CreateTodoScreen`（暂时只是一个 Composable 函数，不涉及导航）
2. 包含：
   - 标题输入框（`OutlinedTextField`）：placeholder「输入任务名称」
   - 优先级选择（3 个 `FilterChip`：高 / 中 / 低）
   - 「保存」按钮：点击后打印输入内容到 Logcat
   - 标题为空时「保存」按钮置灰，无法点击

### 通过标准
- [ ] 输入框能正常输入，键盘弹起不遮挡内容（加 `imePadding()`）
- [ ] 优先级 Chip 单选逻辑正确，选中样式有变化
- [ ] 标题为空时保存按钮 `enabled = false`，样式变灰
- [ ] 点击保存后 Logcat 能看到输入的内容

---

## Day 14 · ViewModel + StateFlow

### 今天做什么
1. 阅读：https://developer.android.com/jetpack/compose/state#viewmodel-state
2. 创建 `TodoViewModel`：
   - 内部维护一个 `MutableStateFlow<List<Todo>>`
   - 提供 `addTodo(title, priority)`、`toggleDone(id)`、`deleteTodo(id)` 方法
   - 数据先存在内存里（List），暂时不用数据库
3. 把列表页和创建页都接入 ViewModel，删除之前的假数据

### 通过标准
- [ ] 在创建页填写并保存后，列表页立即出现新 Todo（不需要重启）
- [ ] 点击列表项的复选框，isDone 状态正确切换
- [ ] ViewModel 中没有直接持有 Activity/Composable 的引用
- [ ] 能解释为什么用 `StateFlow` 而不是直接用 `MutableList`

---

## Day 15 · 详情页 UI

### 今天做什么
1. 新建 `DetailScreen(todoId: Int)`：
   - 显示 Todo 的完整信息（标题、优先级、创建时间、完成状态）
   - 一个「标记完成」按钮（已完成则显示「取消完成」）
   - 一个「删除」按钮（点击后弹出确认对话框 `AlertDialog`）
2. 暂时通过 ViewModel 根据 id 查数据，不涉及导航传参

### 通过标准
- [ ] 详情页内容从 ViewModel 读取，与列表页数据一致
- [ ] 点击「标记完成」后按钮文字变化，列表页对应项也更新
- [ ] 删除确认对话框有「确认」和「取消」两个按钮，逻辑正确
- [ ] 删除后 Todo 从 ViewModel 列表中移除

---

## Day 16 · Material 3 主题定制

### 今天做什么
1. 阅读：https://developer.android.com/jetpack/compose/designsystems/material3
2. 自定义 APP 主题颜色（不用默认紫色）：
   - 选一套自己喜欢的配色（推荐用 https://m3.material.io/theme-builder 生成）
   - 把生成的 `Color.kt` 和 `Theme.kt` 复制到项目
3. 统一调整 TodoCard 的样式：圆角、阴影、字体大小层级

### 通过标准
- [ ] APP 主色已替换，不再是默认紫色
- [ ] 深色模式切换后颜色正常（不出现白字白底）
- [ ] TodoCard 视觉层次清晰（标题 > 副标题 > 元信息）
- [ ] 整体 UI 在截图后看起来像一个真实的 APP，而非练习项目

---

## Day 17–18 · 第二阶段综合练习

### Day 17 任务
不看资料，**从零搭建整个 UI 层**（不需要导航，只需要把所有 Screen 作为 Composable 拼在一起）：
- 列表页（带搜索框，输入关键词实时过滤列表）
- 创建页（表单，带验证）
- 详情页（操作按钮）

### Day 18 任务
自测 + 修 Bug：
- 横屏旋转不崩溃（ViewModel 保持状态）
- 快速点击按钮不会触发多次操作（防抖）
- 所有文字支持系统字体缩放（不要写死 px）

### 通过标准（Day 17-18）
- [ ] 三个页面全部实现，UI 美观
- [ ] 搜索过滤功能正常（大小写不敏感）
- [ ] 横屏旋转后数据不丢失
- [ ] 截图发给朋友，对方能看出这是一个 TODO APP

> ✅ 第二阶段完成！明天开始导航和丝滑动画。

---

# 第三阶段：导航 + 丝滑动画（第 19–23 天）

---

## Day 19 · Navigation Compose 基础

### 今天做什么
1. 在 `build.gradle` 添加依赖：`androidx.navigation:navigation-compose`
2. 创建 `AppNavigation.kt`，用 `NavHost` 连接三个页面
3. 实现：
   - 列表页点击「+」→ 跳转创建页
   - 创建页保存 → 返回列表页
   - 列表页点击某项 → 跳转详情页（传递 todoId）
4. 暂时不加动画，先让导航逻辑跑通

### 通过标准
- [ ] 三个页面之间导航均正常，不崩溃
- [ ] 详情页能根据 todoId 显示正确的 Todo 内容
- [ ] 返回键（系统手势）正确返回上一页
- [ ] 创建页保存后，列表页立即显示新数据（不需要重新进入）

---

## Day 20 · 页面切换动画

### 今天做什么
1. 为 `NavHost` 配置全局默认动画：
   - 进入：从右侧滑入（`slideIntoContainer Left`）
   - 退出：向左滑出
   - 返回进入：从左侧滑入
   - 返回退出：向右滑出
2. 为创建页单独配置：从底部滑入（`slideIntoContainer Up`）
3. 调整 `animationSpec`：时长 300ms，曲线 `EaseInOutCubic`

### 通过标准
- [ ] 所有页面跳转有动画，无硬切
- [ ] 创建页底部弹出，与其他页面区别明显
- [ ] 返回手势方向与进入方向相反（感觉自然）
- [ ] 动画时长不超过 350ms（过长会感觉卡）

---

## Day 21 · 细节动画：列表项动画

### 今天做什么
1. 列表项添加动画：
   - 新增 Todo 时：从顶部滑入 + 淡入（`AnimatedVisibility`）
   - 删除 Todo 时：向右滑出 + 淡出
   - 勾选完成时：删除线从左到右「划过」的动画
2. FAB 按钮滚动时的展开/收起动画

### 通过标准
- [ ] 新增/删除动画流畅，无跳动
- [ ] 删除线动画能感知到「划过」效果（用 `animateFloatAsState` 控制宽度）
- [ ] FAB 在列表下滑时缩小为图标，上滑时展开为文字按钮
- [ ] 所有动画在低端机（模拟器 2G RAM）上不出现掉帧

---

## Day 22 · 共享元素过渡（Shared Element Transition）

### 今天做什么
1. 确认项目 Compose 版本 ≥ 1.7
2. 用 `SharedTransitionLayout` + `sharedElement()` 实现：
   - 列表页的 TodoCard → 详情页：标题文字共享过渡
   - 详情页返回时：标题飞回列表对应位置
3. 如果版本不支持，改用 `AnimatedContent` 模拟类似效果

### 通过标准
- [ ] 点击列表项，标题文字「飞」到详情页对应位置
- [ ] 返回时标题飞回去，位置准确
- [ ] 过渡过程中没有闪烁或跳帧
- [ ] 快速点击多个列表项不会导致动画混乱或崩溃

---

## Day 23 · 第三阶段收尾 + 性能检查

### 今天做什么
1. 用 Android Studio 的 **Layout Inspector** 检查 UI 层级
2. 用 **Profiler** 录制一段操作，观察帧率（目标：稳定 60fps）
3. 检查并修复：
   - 不必要的 Recomposition（用 `remember` 缓存计算结果）
   - 动画期间主线程是否有耗时操作

### 通过标准
- [ ] Layout Inspector 中没有超过 5 层无意义的嵌套
- [ ] Profiler 显示动画期间帧率稳定在 55fps 以上
- [ ] `derivedStateOf` 已用于过滤列表（避免每次键入都重算）
- [ ] 所有动画关键帧无掉帧（Profiler 中无红色帧）

> ✅ 第三阶段完成！明天开始接入真实数据库。

---

# 第四阶段：Room 数据持久化（第 24–27 天）

---

## Day 24 · Room 三件套搭建

### 今天做什么
1. 添加 Room 依赖到 `build.gradle`
2. 创建三个文件：
   - `Todo.kt`：加上 `@Entity` 注解
   - `TodoDao.kt`：定义增删查改接口
   - `AppDatabase.kt`：`@Database` 单例
3. 先不连接 UI，只写一个测试函数验证数据库能正常读写

### 通过标准
- [ ] 项目能正常编译，无 Room 相关报错
- [ ] 测试函数能向数据库插入一条数据并查询出来
- [ ] `AppDatabase` 使用单例模式，全局只有一个实例
- [ ] 能解释 `@PrimaryKey(autoGenerate = true)` 的作用

---

## Day 25 · Repository 模式 + 连接 ViewModel

### 今天做什么
1. 创建 `TodoRepository`：封装 DAO 操作，对外提供干净的接口
2. 修改 `TodoViewModel`：
   - 把内存 List 替换为 Room 的 `Flow<List<Todo>>`
   - 所有写操作（增删改）改为 `suspend` 函数，在 `viewModelScope` 里调用
3. UI 层不需要修改（`StateFlow` 接口不变）

### 通过标准
- [ ] 新建 Todo 后重启 APP，数据依然存在
- [ ] ViewModel 中没有直接引用 DAO（通过 Repository 间接访问）
- [ ] 所有数据库操作在后台线程执行，UI 不卡顿
- [ ] 能解释为什么 Room 查询返回 `Flow` 而不是直接返回 `List`

---

## Day 26 · 数据迁移 + 错误处理

### 今天做什么
1. 给 `Todo` 表新增一个字段 `note: String`（备注），模拟数据库升级
2. 实现 Migration：`version 1 → version 2`
3. 在 ViewModel 层添加错误处理：
   - 数据库操作失败时，UI 显示错误提示（SnackBar）
   - 添加 `try-catch`，不让崩溃直接传到 UI

### 通过标准
- [ ] 数据库版本升级后，已有数据不丢失
- [ ] `note` 字段的默认值为空字符串（旧数据兼容）
- [ ] 模拟数据库写入失败（抛异常），UI 能显示错误而非崩溃
- [ ] 能解释为什么不能直接改 Entity 而要写 Migration

---

## Day 27 · 第四阶段综合测试

### 今天做什么
全面测试数据层，模拟真实用户操作：
1. 新建 10 个 Todo
2. 完成其中 5 个
3. 删除 3 个
4. 强制关闭 APP，重新打开，验证数据状态
5. 检查：列表排序是否正确（按创建时间倒序）

### 通过标准
- [ ] 所有操作后重启 APP，数据状态与操作前一致
- [ ] 列表始终按创建时间倒序排列
- [ ] 没有数据重复或数据丢失的情况
- [ ] 快速连续操作（1秒内多次新增）不出现数据库锁冲突

> ✅ 第四阶段完成！最后收尾打磨。

---

# 收尾阶段：整合 + 打磨（第 28–30 天）

---

## Day 28 · 空状态 + 深色模式 + 键盘处理

### 今天做什么
1. 空状态：列表为空时显示插画 + 引导文字「点击 + 添加你的第一个任务」
2. 深色模式：检查所有页面，修复深色下看不清的文字或图标
3. 键盘处理：
   - 创建页弹起键盘时，保存按钮不被遮挡
   - 点击列表区域时键盘自动收起

### 通过标准
- [ ] 空列表页面有视觉引导，不是一片空白
- [ ] 系统切换深色模式后，所有文字和图标均清晰可见
- [ ] 键盘弹起时，表单内容和按钮均可见，不需要滚动才能点到
- [ ] 点击列表区域，键盘自动收起（`LocalFocusManager.clearFocus()`）

---

## Day 29 · 性能优化 + APK 瘦身

### 今天做什么
1. 开启 R8 混淆（`build.gradle` 中 `minifyEnabled = true`）
2. 检查并删除未使用的依赖
3. 用 `Build → Analyze APK` 查看 APK 构成
4. 对比优化前后 APK 大小

### 通过标准
- [ ] Release APK 大小 < 10MB（正常应在 5–8MB）
- [ ] 开启混淆后 APP 功能全部正常，无崩溃
- [ ] `strings.xml` 中无硬编码中文（全部提取）
- [ ] Logcat 中无 `W/` 级别以上的警告（已知问题除外）

---

## Day 30 · 最终验收

### 今天做什么
按以下清单逐项测试，全部通过即为完成：

### 最终通过标准

**功能完整性**
- [ ] 可以新建 Todo（标题 + 优先级）
- [ ] 可以标记完成 / 取消完成
- [ ] 可以删除 Todo（有确认对话框）
- [ ] 可以按关键词搜索过滤
- [ ] 重启 APP 数据不丢失

**体验质量**
- [ ] 所有页面切换有动画，无一处硬切
- [ ] 动画时长合理（200–350ms），不慢不快
- [ ] 在模拟器上操作，帧率稳定无卡顿
- [ ] 深色模式完全支持
- [ ] 键盘弹起 / 收起处理正确

**代码质量**
- [ ] 没有在 Composable 函数里直接操作数据库
- [ ] 没有在主线程执行耗时操作
- [ ] 代码能被自己 1 个月后看懂

**最终验收动作**：录一段 30 秒的操作视频，包含新建、完成、删除、页面切换动画。看完视频觉得「这是一个真正的 APP」，即为通过。

---

> 🎉 恭喜完成 30 天学习计划！
> 
> 接下来可以考虑：添加小组件（Widget）、接入云同步、上架 Google Play。

---

*生成日期：2026 年 4 月*