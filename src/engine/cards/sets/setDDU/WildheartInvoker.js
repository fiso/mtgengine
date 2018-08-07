"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildheartInvoker extends UnimplementedCard {
  constructor (game) {
    super(game, "Wildheart Invoker", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = WildheartInvoker;
