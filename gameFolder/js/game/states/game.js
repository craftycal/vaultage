vaultage.game = function() {};



vaultage.game.prototype = {
  create : function() {

    // physics engine
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1000;

    // obstacles
    this.obstacles = this.game.add.group();
    this.obstacles.enableBody = true;

    // physics on sprites
    this.game.physics.arcade.enable([this.player, this.ground]);
    this.ground.body.immovable = true;
    this.ground.body.allowGravity = false;
    this.player.body.collideWorldBounds = true;

    // input
    cursors = this.input.keyboard.createCursorKeys();
    this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    //
    this.createObstacles();
    this.nextObstacle();

  },
  update : function() {

    this.game.physics.arcade.collide(this.player, this.ground);

    if (jumpButton.isDown && (this.player.body.touching.down)) {
      this.player.body.velocity.y = -400;
    }

    this.obstacles.forEachAlive(this.updateObstacle, this);


  },
  shutdown : function() {
  },

  createObstacles: function() {

    // 1 x 5 keys == 5 obstacles
    this.obstacles.createMultiple(1, 'obstacle', [0, 1, 2, 3, 4]);
    this.obstacles.setAll('body.allowGravity', false);
    this.obstacles.setAll('body.immovable', true);
  },

  nextObstacle: function() {

    // timer on next obstacle spawn
    this.resetNextObstacle();
    this.time.events.add(this.rnd.between(2000, 6000), this.nextObstacle, this);
  },

  resetNextObstacle: function() {
    var obs = this.obstacles.getFirstDead();

    if (obs) {
        obs.reset();
        obs.left = this.world.bounds.right;
        obs.bottom = this.ground.top;
        obs.body.velocity.x = -180;
    } else {
        console.warn("None available", this.obstacles.children);
    }
  },

  updateObstacle: function(obs) {

    // kill obstacle after it moves out of bounds
    if (obs.right < this.world.bounds.left) {
      obs.kill();
    }
  },

}
