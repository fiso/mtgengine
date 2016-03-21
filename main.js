"use strict";
var Game = require("./engine/Game");
var Constants = require("./engine/Constants");
var Inputs = require("./engine/Inputs");

function testGame () {
	try {
		let game = new Game.Game(2, 0);
		var p0 = game._players[0];
		var p1 = game._players[1];

		while (true) {
			if (game.isWaitingForInput()) {
				var player = game._hasPriority;
				if (player === game._activePlayer) {
					if (game._currentStep === Constants.steps.MAIN1 ||
						game._currentStep === Constants.steps.MAIN2) {
						if (game._stack.empty()) {
							if (player._landPlaysRemaining > 0) {
								var cardsInHand = player._hand.objects;
								for (var i = 0; i < cardsInHand.length; i++) {
									var cardInHand = cardsInHand[i];
									if (cardInHand.isType(Constants.cardTypes.LAND)) {
										player.addInput(Inputs.PLAY_LAND, {landCard: cardInHand});
										break;
									}
								}
							} else {
								var cardsInHand = player._hand.objects;
								for (var i = 0; i < cardsInHand.length; i++) {
									var cardInHand = cardsInHand[i];
									if (cardInHand.isType(Constants.cardTypes.INSTANT)) {
										player.addInput(Inputs.ACTIVATE_ABILITY, {
											object: game._battlefield.getPermanentsControlledByPlayer(player)[0],
											abilityIndex: 0
										});
										player.addInput(Inputs.CAST_SPELL, {
											card: cardInHand,
											targets: [game.getNextPlayer(player)]
										});
										player.addInput(Inputs.PASS_PRIORITY, {});
										break;
									}
								}
							}
						}
					}
				}				

				if (!player.hasUnprocessedInputs()) {
					player.addInput(Inputs.PASS_PRIORITY, {});
				}
			} else if (!game.isWaitingForInput()) {
				game.tick();
			}
		}
	} catch (e) {
		if (e instanceof Game.GameOver) {
			console.log("Game over.");
		} else {
			throw e;
		}
	}
}

testGame();
