import './style/index.less';
import Food from './modules/Food';
import ScorePanel from './modules/ScorePanel';
import Snake from './modules/Snake';


// const food = new Food();
// const scorePanel = new ScorePanel();
// setInterval(() => {
//   food.change();
//   scorePanel.addScore();
// }, 1000);


const scorePanel = new ScorePanel(10, 200);
for (let i = 0; i < 200; i++) {
  scorePanel.addScore();
}