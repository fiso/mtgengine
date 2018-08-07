"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmeraldMedallion extends UnimplementedCard {
  constructor (game) {
    super(game, "Emerald Medallion", "Commander Anthology", "CMA");
  }
}

module.exports = EmeraldMedallion;
