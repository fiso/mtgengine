"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamewaveInvoker extends UnimplementedCard {
  constructor(game) {
    super(game, "Flamewave Invoker", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = FlamewaveInvoker;
