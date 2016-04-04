"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlamewaveInvoker extends Card {
  constructor(game) {
    super(game, "Flamewave Invoker", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = FlamewaveInvoker;
