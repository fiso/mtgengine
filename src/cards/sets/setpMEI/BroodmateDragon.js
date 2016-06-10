"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodmateDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Broodmate Dragon", "Media Inserts", "pMEI");
  }
}

module.exports = BroodmateDragon;
