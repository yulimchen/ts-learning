// 定义食物类 Food
class Food {
  // 定义一个属性表示食物对应的元素
  element: HTMLElement;

  constructor() {
    // 页面中获取 food 元素并赋值
    this.element = document.getElementById('food')!;
  }

  // 定义一个获取食物 X 轴坐标的方法
  get X () {
    return this.element.offsetLeft;
  }
  // 获取食物 Y 轴坐标的方法
  get Y () {
    return this.element.offsetTop;
  }

  // 修改食物位置的方法
  change() {
    // 食物的位置最小是0 最大是290
    // 蛇移动一次就是一格，一格大小为 10*10

    const top = Math.floor(Math.random() * 30) * 10;
    const left = Math.floor(Math.random() * 30) * 10;

    this.element.style.top = top + 'px';
    this.element.style.left = left + 'px';
  }
}

export default Food;