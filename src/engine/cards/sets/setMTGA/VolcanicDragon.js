"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Dragon", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = VolcanicDragon;
