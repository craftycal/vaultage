var scoreboard = function(game) {
  Phaser.Group.call(this, game);
}

scoreboard.prototype = Object.create(Phaser.Group.prototype);
scoreboard.prototype.constructor = scoreboard;

score.prototype.show = function(score) {
  var bmd, background, gameoverText, scoreText, highScoreText, NewHightScoreText, startText;

  bmd = this.game.add.bitmapData(this.game.width, this.game.height);
  bmd.ctx.fillStyle = '#000';
  bmd.ctx.fillRect(0, 0, this.game.width, this.game.height);

  background = this.game.add.sprite(0,0, bmd);
  background.alpha = 0.5;

  this.add(background);

  var isNewHighScore = false;
  var highscore = localStorage.getItem('highscore');
  if (!highscore || highscore < score) {
    isNewHighScore = true;
    highscore = score;
    localStorage.setItem('highscore', highscore);
  }

  this.y = this.game.height;
};

scoreboard.prototype.restart = function() {

  gameoverText = this.game.add.bitmapText(0, 100, 'courier', 'game over', 20);
  gameoverText.x = this.game.width/2 - (gameoverText.textWidth /2);
  this.add(gameoverText);

  scoreText = this.game.add.bitmapText(0, 200, 'courier', 'Score:' + score, 16);
  scoreText.x = this.game.width/2 - (scoreText.textWidth /2);
  this.add(scoreText);

  highScoreText = this.game.add.bitmapText(0, 250, 'courier', 'Your High Score:' + highscore, 16);
  highScoreText.x = this.game.width/2 - (highScoreText.textWidth /2);
  this.add(highScoreText);

  startText = this.game.add.bitmapText(0, 300, 'courier', 'Play Again', 16);
  startText.x = this.game.width/2 - (startText.textWidth /2);
  this.add(startText);

  this.game.add.tween(this).to({y: 0}, 1000, phaser.Easing. Bounce.out, true);

  this.game.input.onDown.addOnce(this.restart, this);
};

scoreboard.prototype.restart = function() {
  this.game.state.start('Game', true, false);

};
