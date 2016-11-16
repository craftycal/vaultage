var game = new Phaser.Game(820, 360, Phaser.AUTO, 'game_box');

game.state.add('boot', vaultage.Boot);

game.state.start('boot');
