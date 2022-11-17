import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

// 游戏控制器，控制其他所有类
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  // 按键的方向
  direction: string = '';

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
  }

  // 键盘按键响应函数
  keydownHandler(event: KeyboardEvent) {
    // 需要检查 event.key 值是否合法
    this.direction = event.key;
  }
}

export default GameControl;