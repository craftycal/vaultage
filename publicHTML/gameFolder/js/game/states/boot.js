var vaultage = function () {};

vaultage.boot= function() {};

vaultage.boot.prototype = {
  preload: function() {
    // images
    this.load.image('logo', 'gameFolder/assets/images/vaultage_logo.png');
    this.load.image('preloadBar', 'gameFolder/assets/images/load_bar.png');

  },
  create: function() {
    // background colour
    this.game.stage.backgroundColor = '#e6e6e6';

    // no multi-touch
    this.input.maxPointers = 1;

    // if on desktop
    if (this.game.device.desktop) {
      this.scale.pageAlignHorizontally = true;
    // display mobile
    } else {
      this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
      // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      // this.scale.minWidth = 480;
      // this.scale.minHeight = 260;
      // this.scale.maxWidth = 1024;
      // this.scale.maxHeight = 768;
      // this.scale.forceLandscape = true;
      // this.scale.pageAlignHorizontally = true;
      // this.scale.setScreenSize(true);
    }
    this.state.start('preloader');
  }
};
