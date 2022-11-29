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
    // 新旧值相同则直接返回
    if (this.X === val) {
      return;
    }

    // X 的合法值在 0-290 之间
    if (val < 0 || val >290) {
      throw new Error('蛇撞墙啦X');
    }

    // 修改 X 时蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
      // console.log('水平方向发生掉头');
      // 如果发生了掉头，让蛇维持反方向继续移动
      if (val > this.X) {
        // 如果 val 大于旧值 X，则说明蛇在向右走，此时发生掉头保持蛇继续向左走
        val = this.X - 10;
      } else {
        // 向右走
        val = this.X + 10;
      }
    }

    // 移动身体
    this.moveBody();
    
    this.head.style.left = val + 'px';
    // 检查是否撞到自己
    this.checkHeadBody();
  }
  set Y(val) {
    // 新旧值相同则直接返回
    if (this.Y === val) {
      return;
    }

    if (val < 0 || val > 290) {
      throw new Error('蛇撞墙啦Y');
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
      // console.log('垂直方向发生掉头');
      if (val > this.Y) {
        val = this.Y - 10;
      } else {
        val = this.Y + 10;
      }
    }

    // 移动身体
    this.moveBody();

    this.head.style.top = val + 'px';
    // 检查是否撞到自己
    this.checkHeadBody();
  }

  // 蛇添加身体的方法
  addBody() {
    // 添加一个 div
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // 添加蛇移动身体的方法
  moveBody() {
    /**
     *    将后面的身体分别设置为前一节身体的位置
     *        例： 
     *          第 4 节 = 之前第 3 节的位置
     *          第 3 节 = 之前第 2 节的位置
     *          第 2 节 = 之前蛇头的位置
     */

    // 遍历获取所有身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前一节身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      // 设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  checkHeadBody() {
    // 遍历获取所有身体，检查是否蛇头和身体坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      const bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 蛇头撞蛇身，游戏结束
        throw new Error('撞到自己啦~~');
      }
    }
  }
}

export default Snake;