"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleLion extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Lion", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = JungleLion;
