---
layout:     post
title:      List容器
subtitle:   ArrayList、LinkedList、vector
date:       2018-09-23
author:     Syuan
header-img: img/post-bg-universe.jpg
catalog: true
tags:
    - 容器
---

### ArrayList

#### 特点

实现了List接口，底层是动态数组，和java的数组比起来，它的长度可以增加。
由于底层数组的数据结构，因此它**插入删除元素的复杂度是n**，求表长、增加元素、**取第i个元素的时间复杂度是1.**
不是线程安全的，在多线程环境下使用vector来代替它。

```
public class ArrayList<E> extends AbstractList<E>
    implements List<E>, RandomAccess, Cloneable, java.io.Serializable
```

#### 几种构造方法：

##### 1.空参构造：

```
/**
 *默认构造函数，使用初始容量10构造一个空列表(无参数构造)
 */
private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};
public ArrayList() {
    this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
}
```
##### 2.指定初始容量大小构造：

```
/**
 * 带初始容量参数的构造函数。（用户自己指定容量）
 */
public ArrayList(int initialCapacity) {
    if (initialCapacity > 0) {//初始容量大于0
        //创建initialCapacity大小的数组
        this.elementData = new Object[initialCapacity];
    } else if (initialCapacity == 0) {//初始容量等于0
        //创建空数组
        this.elementData = EMPTY_ELEMENTDATA;
    } else {//初始容量小于0，抛出异常
        throw new IllegalArgumentException("Illegal Capacity: "+
                                           initialCapacity);
    }
}
```
##### 3.指定一个collection集合构造：

```
/**
*构造包含指定collection元素的列表，这些元素利用该集合的迭代器按顺序返回
*如果指定的集合为null，throws NullPointerException。 
*/
 public ArrayList(Collection<? extends E> c) {
    elementData = c.toArray();
    if ((size = elementData.length) != 0) {
        // c.toArray might (incorrectly) not return Object[] (see 6260652)
        if (elementData.getClass() != Object[].class)
            elementData = Arrays.copyOf(elementData, size, Object[].class);
    } else {
        // replace with empty array.
        this.elementData = EMPTY_ELEMENTDATA;
    }
}
```

#### 空参扩容

1. 当我们是空参构造时，实际上一开始我们是初始化一个空数组
2. 当我们在其中加入第一个元素的时候，会对其进行扩容至10.
3. 扩容会经过一系列判断来确定容量，然后调用核心方法grow()来扩容。

```
/**
 * 将指定的元素追加到此列表的末尾。 
 */
public boolean add(E e) {
//添加元素之前，先调用ensureCapacityInternal方法
    ensureCapacityInternal(size + 1);  // 含有元素的数量
    //这里看到ArrayList添加元素的实质就相当于为数组赋值
    elementData[size++] = e;
    return true;
}
//得到最小扩容量
private static final int DEFAULT_CAPACITY = 10;
private void ensureCapacityInternal(int minCapacity) {
    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
          // 获取默认的容量和传入参数的较大值
          //所以当一个空数组中加入第一个元素的时候会扩容为10
        minCapacity = Math.max(DEFAULT_CAPACITY, minCapacity);
    }

    ensureExplicitCapacity(minCapacity);
}
```
可以看到上面调用了ensureExplicitCapacity()方法，用来判断是否需要扩容，如果需要会调用grow方法。
```
//判断是否需要扩容
private void ensureExplicitCapacity(int minCapacity) {
    modCount++;

    // overflow-conscious code
    if (minCapacity - elementData.length > 0)
        //调用grow方法进行扩容，调用此方法代表已经开始扩容了
        grow(minCapacity);
}
```
扩容核心方法grow()：

```
/**
 * 要分配的最大数组大小
 */
private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;

/**
 * ArrayList扩容的核心方法。
 */
private void grow(int minCapacity) {
    // oldCapacity为旧容量，newCapacity为新容量
    int oldCapacity = elementData.length;
    //将oldCapacity 右移一位，其效果相当于oldCapacity /2，
    //我们知道位运算的速度远远快于整除运算，整句运算式的结果就是将新容量更新为旧容量的1.5倍，
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    //然后检查新容量是否大于最小需要容量，若还是小于最小需要容量，那么就把最小需要容量当作数组的新容量，
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
   // 如果新容量大于 MAX_ARRAY_SIZE,进入(执行) `hugeCapacity()` 方法来比较 minCapacity 和 MAX_ARRAY_SIZE，
   //如果minCapacity大于最大容量，则新容量则为`Integer.MAX_VALUE`，否则，新容量大小则为 MAX_ARRAY_SIZE 即为 `Integer.MAX_VALUE - 8`。
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    // minCapacity is usually close to size, so this is a win:
    elementData = Arrays.copyOf(elementData, newCapacity);
}
```
Arrays.copyOf(elementData, newCapacity)方法：
```
/**
 以正确的顺序返回一个包含此列表中所有元素的数组（从第一个到最后一个元素）; 返回的数组的运行时类型是指定数组的运行时类型。 
 */
public Object[] toArray() {
//elementData：要复制的数组；size：要复制的长度
    return Arrays.copyOf(elementData, size);
}
```

```
/**
copyOf() 是系统自动在内部新建一个数组，并返回该数组，可以看到copyof()调用了arraycopy()方法
*/
public static int[] copyOf(int[] original, int newLength) {
    int[] copy = new int[newLength];
    System.arraycopy(original, 0, copy, 0,
                     Math.min(original.length, newLength));
    return copy;
}
```
arraycopy是一个本地方法，
arraycopy() 需要目标数组，将原数组拷贝到你自己定义的数组里或者原数组，而且可以选择拷贝的起点和长度以及放入新数组中的位置。

**ensureCapacity()方法用**来根据传入的值增加ArrayList的容量，在add大量元素之前调用这个方法可以减少扩容的次数，从而提高效率。

```
/**
 *
 * @param   minCapacity   所需的最小容量
 */
public void ensureCapacity(int minCapacity) {
    int minExpand = (elementData != DEFAULTCAPACITY_EMPTY_ELEMENTDATA)
        // any size if not default element table
        ? 0
        // larger than default for default empty table. It's already
        // supposed to be at default size.
        : DEFAULT_CAPACITY;

    if (minCapacity > minExpand) {
        ensureExplicitCapacity(minCapacity);
    }
}
```
使用示例：

直接指定容量并不是最好的办法

```
public class Test1 {
    public static void ensureCapacityTest() {
        long startTime = System.currentTimeMillis();
        ArrayList<Object> list1 = new ArrayList<>();
        for (int i = 1; i < 10000000; i++) {
            list1.add(new Object());
        }
        System.out.println(System.currentTimeMillis() - startTime);
        //2962
        long startTime2 = System.currentTimeMillis();
        ArrayList<Object> list2 = new ArrayList<>();
        list2.ensureCapacity(10000000);
        for (int i = 1; i < 10000000; i++) {
            list2.add(new Object());
        }
        System.out.println(System.currentTimeMillis() - startTime2);
        //724
        long startTime3 = System.currentTimeMillis();
        ArrayList<Object> list3 = new ArrayList<>(10000000);
        for (int i = 1; i < 10000000; i++) {
            list3.add(new Object());
        }
        System.out.println(System.currentTimeMillis() - startTime3);
        //1768
    }
    public static void main(String[] args) throws IOException {
        ensureCapacityTest();
    }
}
```

#### 线程安全问题

- ArrayList是线程不安全的，我们一般使用vector来代替。
- vector的实现和ArrayList类似，它的方法（add、get）使用synchronized修饰，因此它的性能也就没有ArrayList好。
- vector每次扩容申请2倍的空间，而ArrayList申请1.5倍的空间。
- 除此之外，我们还可以使用Collections.synchronizedList（）来实现线程安全。

### LinkedList
#### 特点

LinkedList实现了Deque接口，而Deque继承了Queue接口。
因此我们可以有这种用法：

```
Deque<Integer> deque=new LinkedList<>();
Queue<Integer> queue=new LinkedList<>();
```

```
public class LinkedList<E>
    extends AbstractSequentialList<E>
    implements List<E>, Deque<E>, Cloneable, java.io.Serializable
```
LinkedList的底层是一个**双端链表**，因此可以高效的插入和删除。但是它不是线程安全的，我们可以使用Collections工具类的synchronizedList方法：
```
List list=Collections.synchronizedList(new LinkedList(...));
```
#### 内部结点类

```
private static class Node<E> {
    E item;//节点值
    Node<E> next;//后继节点
    Node<E> prev;//前驱节点

    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}
```

#### 构造方法

**使用集合创建的构造方法**：

```
public LinkedList(Collection<? extends E> c) {
    this();
    addAll(c);
}
```
**addAll**:
```
public boolean addAll(int index, Collection<? extends E> c) {
    //1:检查index范围是否在size之内
    checkPositionIndex(index);

    //2:toArray()方法把集合的数据存到对象数组中
    Object[] a = c.toArray();
    int numNew = a.length;
    if (numNew == 0)
        return false;

    //3：得到插入位置的前驱节点和后继节点
    Node<E> pred, succ;
    //如果插入位置为尾部，前驱节点为last，后继节点为null
    if (index == size) {
        succ = null;
        pred = last;
    }
    //否则，调用node()方法得到后继节点，再得到前驱节点
    else {
        succ = node(index);
        pred = succ.prev;
    }

    // 4：遍历数据将数据插入
    for (Object o : a) {
        @SuppressWarnings("unchecked") E e = (E) o;
        //创建新节点
        Node<E> newNode = new Node<>(pred, e, null);
        //如果插入位置在链表头部
        if (pred == null)
            first = newNode;
        else
            pred.next = newNode;
        pred = newNode;
    }

    //如果插入位置在尾部，重置last节点
    if (succ == null) {
        last = pred;
    }
    //否则，将插入的链表与先前链表连接起来
    else {
        pred.next = succ;
        succ.prev = pred;
    }

    size += numNew;
    modCount++;
    return true;
}
```

