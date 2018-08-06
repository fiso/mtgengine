"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningVengeance extends UnimplementedCard {
  constructor (game) {
    super(game, "Burning Vengeance", "Eternal Masters", "EMA");
  }
}

module.exports = BurningVengeance;
