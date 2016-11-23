var game = new Phaser.Game(820, 360, Phaser.AUTO, 'game_box');

game.state.add('boot', vaultage.boot);
game.state.add('preloader', vaultage.preload);
game.state.add('mainMenu', vaultage.mainMenu);
game.state.add('game', vaultage.game);

game.state.start('boot');
