"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MiasmicMummy extends UnimplementedCard {
  constructor (game) {
    super(game, "Miasmic Mummy", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = MiasmicMummy;
