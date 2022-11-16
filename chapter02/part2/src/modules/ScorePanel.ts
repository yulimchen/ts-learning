class ScorePanel {
  // 初始分数、等级
  score = 0;
  level = 1;

  // dom 元素
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 等级限制
  maxLevel: number;
  // 设置升一级的分数步进
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 加分的方法
  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';
    // 每 10 分升一级
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  // 提升等级的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}

export default ScorePanel;