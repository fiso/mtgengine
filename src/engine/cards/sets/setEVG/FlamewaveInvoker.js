"use strict";
const Constants = require ("../../../Constants");
const FlamewaveInvokerBase = require("../setBBD/FlamewaveInvoker");

class FlamewaveInvoker extends FlamewaveInvokerBase {
  constructor (game) {
    super(game, "Flamewave Invoker", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = FlamewaveInvoker;
