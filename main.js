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
        game.log("################################");
        game.log("## Need something to do at " + Constants.stepNames[game._currentStep]);
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
                    game.log("## Playing land");
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
                      game.log("## Casting spell");

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
                      break;
                    }
                  }
                }
                game.log("## ...and passing");
                player.addInput(Inputs.PASS_PRIORITY, {});
              }
            }
          } else if (game._currentStep === Constants.steps.DECLARE_ATTACKERS &&
                     game._waitingForChoice) {
            // FIXME: Attack!
            let permanents = game._battlefield.getPermanentsControlledByPlayer(player);
            game.log("## Declaring attackers");
            permanents.forEach(permanent => {
              if (permanent.isCreature()) {
                permanent.attacking = true;
              }
            });
            game.log("## Finishing choice");
            player.addInput(Inputs.FINISH_CHOICE, {});
          }
        } else {
          if (game._currentStep === Constants.steps.DECLARE_BLOCKERS &&
                     game._waitingForChoice) {
            game.log("## Declaring blockers");
            game.log("## Finishing choice");
            player.addInput(Inputs.FINISH_CHOICE, {});
          }
        }

        if (!player.hasUnprocessedInputs()) {
          game.log("## Nothing to do, passing at " + Constants.stepNames[game._currentStep]);
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
