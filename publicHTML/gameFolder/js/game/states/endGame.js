
vaultage.endGame = function() {};


vaultage.endGame.prototype = {
  create: function () {

    // background
    this.background = this.game.add.tileSprite(0, 0, this.game.width, 360, 'background');
    this.background.autoScroll(-100, 0);

    // ground
    this.background = this.game.add.tileSprite(0, 290, this.game.width, 8, 'ground');
    this.background.autoScroll(-400, 0);

    // game over text
    this.game.add.text(this.game.world.centerX - 150, this.game.world.centerY - 100, "game over", { font: "60px Raleway"} );

    // place the buttons
    this.rePlay = game.add.sprite(this.game.world.centerX - 150, this.game.world.centerY + 100, 'rePlay');
    this.rePlay.anchor.setTo(0.5, 0.5);
    this.rePlay.inputEnabled = true;

    this.subScore = game.add.sprite(this.game.world.centerX + 150, this.game.world.centerY + 100, 'subScore');
    this.subScore.anchor.setTo(0.5, 0.5);
    this.subScore.inputEnabled = true;

  },
  update: function () {

    // Attach a function to the input down ( click/tap)
    this.rePlay.events.onInputDown.add(function() {
      this.game.state.start('game');
    }, this);

    // Attach a function to the input down ( click/tap)
    this.subScore.events.onInputDown.add(function() {

      // show name inputfield and submit button
      // on submit add name and score into database

    }, this);

  }
}



  // stop everything
  // this.obstacles.setAll('body.velocity.x', 0);
  // this.ground.autoScroll(0, 0);
  // this.background.autoScroll(0, 0);
  // this.player.animations.stop(null, true);

  // timer stop and add time to local storage    <<<<<<<<<
  // stop new obstacles from being created ???   <<<<<<<<<



  // Enable input on the replay button




  // Enable input on the subScore button
