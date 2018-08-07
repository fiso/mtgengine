"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverBoa extends UnimplementedCard {
  constructor (game) {
    super(game, "River Boa", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = RiverBoa;
