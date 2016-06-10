"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Gold Myr", "Mirrodin", "MRD");
  }
}

module.exports = GoldMyr;
