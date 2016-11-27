vaultage.preload= function() {
  this.ready = false;
};

vaultage.preload.prototype = {
  preload: function() {

    // sprites
    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 20, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 110, 'preloadBar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('background', 'gameFolder/assets/images/background.png');
    this.load.image('ground', 'gameFolder/assets/images/ground.png');
    this.load.image('pole', 'gameFolder/assets/images/powe_pole.png');
    this.load.image('pole', 'gameFolder/assets/images/power_box.png');
    this.load.image('line', 'gameFolder/assets/images/power_line.png');

    this.load.spritesheet('player', 'gameFolder/assets/images/player_sprite_run.png', 65, 65, 4);
    this.load.spritesheet('death', 'gameFolder/assets/images/death.png', 69, 118, 2);

    this.load.audio('jump', 'gameFolder/assets/audio/jump.mp3', 'gameFolder/assets/audio/jump.ogg');
    this.load.audio('zap', 'gameFolder/assets/audio/zap.mp3', 'gameFolder/assets/audio/zap.ogg')

    this.load.onLoadComplete.add(this.onLoadComplete, this);

  },
  create: function() {
    this.preloadBar.cropEnabled = false;
  },
  update: function() {
    if (this.cache.isSoundDecoded('jump') && this.ready === true) {
      this.state.start('mainMenu');
    }
  },
  onLoadComplete: function(){
    this.ready = true;
  }
};
