"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningOil extends UnimplementedCard {
  constructor (game) {
    super(game, "Burning Oil", "Dark Ascension", "DKA");
  }
}

module.exports = BurningOil;
