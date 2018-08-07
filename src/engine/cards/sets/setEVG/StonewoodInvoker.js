"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonewoodInvoker extends UnimplementedCard {
  constructor (game) {
    super(game, "Stonewood Invoker", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = StonewoodInvoker;
