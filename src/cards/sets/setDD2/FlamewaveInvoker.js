"use strict";
const Constants = require ("../../../Constants");
const FlamewaveInvokerBase = require("../setBBD/FlamewaveInvoker");

class FlamewaveInvoker extends FlamewaveInvokerBase {
  constructor (game) {
    super(game, "Flamewave Invoker", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FlamewaveInvoker;
