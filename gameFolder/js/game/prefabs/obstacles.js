var obstacle = function(game, x, y, key, frame) {
  key = 'box';
  phaser.Sprite.call(this, game, x, y, key, frame);

  this.anchor.setTo(0.5);

  // enable physics on the sprite without gravity
  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;

  // if the sprite is out of the game window remove the sprite
  this.checkWorldBounds = true;
  this.onOutOfBoundsKill = true;

  this.event.onKilled.add(this.onKilled, this);
  this.events.onRevived.add(this.onRevived, this);

};

box.prototype = object.create(phaser.sprite.prototype);
box.prototype.constructor = box;

// when created
box.prototype.onRevived = function () {
  // give the sprite some velocity
  this.body.velocity.x = -180;
};

// // when prite is killed
// box.prototype.onKilled = function(){
//   // not sure i need??
// };
