vaultage.game = function() {};



vaultage.game.prototype = {
  create : function() {

    // physics engine
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 500;

    // sprites
    this.background = this.game.add.tileSprite(0, 0, this.game.width, 360, 'background');
    this.background.autoScroll(-100, 0);

    this.ground = this.game.add.tileSprite(0, 290, this.game.width, 8, 'ground');
    this.ground.autoScroll(-180, 0);

    this.player = this.add.sprite(45, 200, 'player');
    this.player.animations.add('run');
    this.player.animations.play('run', 15, true);

    // gravity on player
    this.game.physics.arcade.enable([this.player, this.ground]);

    this.ground.body.immovable = true;
    this.ground.body.allowGravity = false;


    this.player.body.collideWorldBounds = true;

    // on ground
    // this.game.physics.arcade.enableBody(this.ground);
    // this.ground.body.allowGravity = false;
    // this.ground.body.immovable = true;

    // input
    // cursors = game.input.keyboard.createCursorKeys();
    // jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);




  },
  update : function() {

    this.game.physics.arcade.collide(this.player, this.ground);

    // if (jumpButton.isDown && this.player.body.onFloor() && game.time.now > jumpTimer)
    // {
    //     this.player.body.velocity.y = -250;
    //     jumpTimer = game.time.now + 750;
    // }

  },
  shutdown : function() {

  }

}
