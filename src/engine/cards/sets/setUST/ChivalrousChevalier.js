"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChivalrousChevalier extends UnimplementedCard {
  constructor (game) {
    super(game, "Chivalrous Chevalier", "Unstable", "UST");
  }
}

module.exports = ChivalrousChevalier;
