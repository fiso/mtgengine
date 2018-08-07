"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlliedStrategies extends UnimplementedCard {
  constructor (game) {
    super(game, "Allied Strategies", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = AlliedStrategies;
