vaultage.game = function() {};

vaultage.game.prototype = {
  create : function() {
    this.background = this.game.add.tileSprite(0, 0, this.game.width, 360, 'background');
    this.background.autoScroll(-100, 0);

    this.background = this.game.add.tileSprite(0, 290, this.game.width, 8, 'ground');
    this.background.autoScroll(-180, 0);

    this.player = this.add.sprite(30, 230, 'player');
    this.player.animations.add('run');
    this.player.animations.play('run', 10, true);

    // physics engine
    // this.game.physics.startSystem(Phaser.Physics.P2JS);
    // gravity
    // this.game.physics.p2.gravity.y = 1000;


    // physics engine
    // this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // gravity
    // this.game.physics.arcade.gravity.y = 400;


    // this.game.physics.arcade.enableBody(this.ground);
    // this.ground.body.allowGravity = false;
    // this.ground.body.immovable = true;


  },
  update : function() {

  },
  shutdown : function() {

  }

}
