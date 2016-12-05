vaultage.game = function() {};



vaultage.game.prototype = {
  create : function() {

    // physics engine
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1000;

    // background
    this.background = this.game.add.tileSprite(0, 0, this.game.width, 360, 'background');
    this.background.autoScroll(-100, 0);

    // ground
    this.ground = this.game.add.tileSprite(0, 290, this.game.width, 8, 'ground');
    this.ground.autoScroll(-200, 0);

    // player
    this.player = this.add.sprite(45, 200, 'player');
    this.player.animations.add('run');
    this.player.animations.play('run', 15, true);

    // obstacles
    this.obstacles = this.game.add.group();
    this.obstacles.enableBody = true;

    // physics on sprites
    this.game.physics.arcade.enable([this.player, this.ground]);
    this.ground.body.immovable = true;
    this.ground.body.allowGravity = false;
    this.player.body.collideWorldBounds = true;

    // input
    // stop space bar from moving the page
    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    cursors = this.input.keyboard.createCursorKeys();
    this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR) ||  this.game.input.onTap.add(onTap, this);;

    //
    this.createObstacles();
    this.nextObstacle();

  },
  update : function() {

    this.game.physics.arcade.collide(this.player, [this.ground, this.obstacles]);

    if (this.jumpButton.isDown && (this.player.body.touching.down)) {
      this.player.body.velocity.y = -500;
    };

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
    this.time.events.add(this.rnd.between(1500, 3000), this.nextObstacle, this);
  },

  resetNextObstacle: function() {
    var obs = this.obstacles.getFirstDead();

    if (obs) {
        obs.reset();
        obs.left = this.world.bounds.right;
        obs.bottom = this.ground.top;
        obs.body.velocity.x = -200;
    } else {
        console.warn("None available", this.obstacles.children);
    }
  },

  updateObstacle: function(obs) {

    // kill obstacle after it moves out of bounds
    if (obs.right < this.world.bounds.left) {
      obs.kill();
    }
  }
}
