class Snake {
  // 蛇头元素
  head: HTMLElement;
  // 蛇的身体
  bodies: HTMLCollection;
  // 蛇的容器
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div')!;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 获取蛇头的坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  // 设置蛇头的坐标
  set X(val) {
    this.head.style.left = val + 'px';
  }
  set Y(val) {
    this.head.style.top = val + 'px';
  }

  // 蛇添加身体的方法
  addBody() {
    // 添加一个 div
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}

export default Snake;