"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonsGrasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Demon's Grasp", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = DemonsGrasp;
