vaultage.game = function() {};
  this.obstacleRate = game.rnd.integerInRange(2000, 6000);
  this.obstacleTimer = 0;

vaultage.game.prototype = {
  create : function() {

    // physics engine
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1000;

    // sprites
    // background
    this.background = this.game.add.tileSprite(0, 0, this.game.width, 360, 'background');
    this.background.autoScroll(-100, 0);

    // ground
    this.ground = this.game.add.tileSprite(0, 290, this.game.width, 8, 'ground');
    this.ground.autoScroll(-180, 0);

    // player
    this.player = this.add.sprite(45, 200, 'player');
    this.player.animations.add('run');
    this.player.animations.play('run', 15, true);

    // obstacles
    this.obstacle = this.game.add.group();

    // physics on sprites
    this.game.physics.arcade.enable([this.player, this.ground]);
    this.ground.body.immovable = true;
    this.ground.body.allowGravity = false;
    this.player.body.collideWorldBounds = true;

    // input
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


  },
  update : function() {

    this.game.physics.arcade.collide(this.player, this.ground);

    if (jumpButton.isDown && (this.player.body.touching.down))
        {
            this.player.body.velocity.y = -400;
        }

    // randomly pick a obstacles every 2-6 seconds and place in along the ground moving towards the player
    if (this.obstacleTimer <  this.game.time.now) {
      this.createObstacle();
      this.obstacleTimer = this.game.time.now + this.obstacleRate;
    }


  },
  shutdown : function() {

  }

  createObstacle: function() {
    var x = this.game.width;
    var y = this.game.hight(290);

    var obstacle = this.obstacle.getFirstExists(false);
    if (!obstacle) {
      obstacle = new obstacle(this.game, 0, 0);
      this.obstacle.add(obstacle);
    }
    obstacle.reset(x, y);
    obstacle.revive();

    }
  }

}
