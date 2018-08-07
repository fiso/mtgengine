"use strict";
const Constants = require ("../../../Constants");
const FlamewaveInvokerBase = require("../setBBD/FlamewaveInvoker");

class FlamewaveInvoker extends FlamewaveInvokerBase {
  constructor (game) {
    super(game, "Flamewave Invoker", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = FlamewaveInvoker;
