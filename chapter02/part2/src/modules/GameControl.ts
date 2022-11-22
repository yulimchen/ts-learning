import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

// 游戏控制器，控制其他所有类
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  // 按键的方向
  direction: string = 'Right';
  // 记录游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();

    this.init();
  }

  // 初始化调用后开始游戏
  init() {
    // 注：需 bind 改变 this 指向
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    // 蛇跑起来
    this.run();
  }

  /**
   * ArrowUp Up
   * ArrowDown Down
   * ArrowLeft Left
   * ArrowRight Right
   */
  // 键盘按键响应函数
  keydownHandler(event: KeyboardEvent) {
    // 需要检查 event.key 值是否合法
    this.direction = event.key;
  }

  run() {
    /**
     * 根据方向（this.direction）来使蛇移动方向改变
     *  向上 top 值减少
     *  向下 top 值增加
     *  向左 left 值减少
     *  向右 left 值增加
     */
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据按键方向来修改 X Y 值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        // 向上移动
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        // 向下移动
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        // 向左移动
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    this.snake.X = X;
    this.snake.Y = Y;

    // 定时调用
    this.isLive && setTimeout(this.run.bind(this), 300);
  }
}

export default GameControl;