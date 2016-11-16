var vaultage = function () {};

vaultage.boot= function() {};

vaultage.boot.prototype = {
  preload: function() {
    this.load.image('logo', 'game/assets/images/vaultage_logo.png');
  },
  create: function() {
    this.game.stage.background = '#e6e6e6';

    this.input.maxPointers = 1;

    if (this.game.device.desktop) {
      this.scale.pageAlignHorizontally = true;
    } else {
      this.scale.scaleMode = Phaser.ScaleManager.ShowAll;
      this.scale.minWidth = 568;
      this.scale.minHight = 600;
      this.scale.maxWidth = 2048;
      this.scale.maxHight = 1536;
      this.scale.forceLandscape = true;
      this.scale.pageAlignHorizontally = true;
      this.scale.setScreenSize(true);
    }
    this.state.start('preloader');
  }
};
