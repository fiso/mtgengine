"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlamewaveInvokerBase = require("../setDD3_EVG/FlamewaveInvoker.js");

class FlamewaveInvoker extends FlamewaveInvokerBase {
  constructor(game) {
    super(game, "Flamewave Invoker", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = FlamewaveInvoker;
