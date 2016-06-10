"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Dragon", "Anthologies", "ATH");
  }
}

module.exports = VolcanicDragon;
