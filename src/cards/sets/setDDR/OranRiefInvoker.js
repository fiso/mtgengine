"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OranRiefInvoker extends UnimplementedCard {
  constructor (game) {
    super(game, "Oran-Rief Invoker", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = OranRiefInvoker;
