"use strict";
const Game = require("./engine/Game");
const Constants = require("./engine/Constants");
const Inputs = require("./engine/Inputs");

function testGame () {
	try {
		let game = new Game.Game(2, 0);
		let p0 = game._players[0];
		let p1 = game._players[1];

		while (true) {
			if (game.isWaitingForInput()) {
				let player = game._hasPriority;
				if (player === game._activePlayer) {
					if (game._currentStep === Constants.steps.MAIN1 ||
						game._currentStep === Constants.steps.MAIN2) {
						if (game._stack.empty()) {
							if (player._landPlaysRemaining > 0) {
								let cardsInHand = player._hand.objects;
								for (let i = 0; i < cardsInHand.length; i++) {
									let cardInHand = cardsInHand[i];
									if (cardInHand.hasType(Constants.cardTypes.LAND)) {
										player.addInput(Inputs.PLAY_LAND, {landCard: cardInHand});
										break;
									}
								}
							} else {
								let cardsInHand = player._hand.objects;
								for (let i = 0; i < cardsInHand.length; i++) {
									let cardInHand = cardsInHand[i];
									if (cardInHand.hasType(Constants.cardTypes.CREATURE)) {
										if (game._battlefield.getPermanentsControlledByPlayer(player).length > 1) {
											player.addInput(Inputs.ACTIVATE_ABILITY, {
												object: game._battlefield.getPermanentsControlledByPlayer(player)[0],
												abilityIndex: 0
											});
											player.addInput(Inputs.ACTIVATE_ABILITY, {
												object: game._battlefield.getPermanentsControlledByPlayer(player)[1],
												abilityIndex: 0
											});
											player.addInput(Inputs.CAST_SPELL, {
												card: cardInHand,
												targets: [game.getNextPlayer(player)]
											});
										}
									}
									player.addInput(Inputs.PASS_PRIORITY, {});
									break;
								}
							}
						}
					} else if (game._currentStep === Constants.steps.DECLARE_ATTACKERS) {
						// FIXME: Attack!
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
