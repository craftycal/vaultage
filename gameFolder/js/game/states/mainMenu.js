vaultage.mainMenu = function() {};

vaultage.mainMenu.prototype = {
  create: function () {

    // bacground
    this.background = this.game.add.tileSprite(0, 0, this.game.width, 360, 'background');
    this.background.autoScroll(-100, 0);

    this.background = this.game.add.tileSprite(0, 290, this.game.width, 8, 'ground');
    this.background.autoScroll(-180, 0);

    this.player = this.add.sprite(30, 230, 'player');
    this.player.animations.add('run');
    this.player.animations.play('run', 10, true);

    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 40, 'logo');
    this.splash.anchor.setTo(0.5);

    this.game.add.text(this.game.world.centerX - 100, this.game.world.centerY + 80, "tap to start", { font: "30px Raleway"} );

  },
  update: function () {
    if (this.game.input.activePointer.justPressed()) {
      this.game.state.start('game');
    }
  }
};
