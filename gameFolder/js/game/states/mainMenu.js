vaultage.mainMenu = function() {};

vaultage.mainMenu.prototype = {
  create: function () {

    // bacground
    this.background = this.game.add.tileSprite(0, 0, this.game.width, 360, 'background');
    this.background.autoScroll(-100, 0);

    this.background = this.game.add.tileSprite(0, 310, this.game.width, 8, 'ground');
    this.background.autoScroll(-180, 0);

    this.player = this.add.sprite(30, 250, 'player');
    this.player.animations.add('run');
    this.player.animations.play('run', 8, true);


  },
  update: function () {

  }
}
