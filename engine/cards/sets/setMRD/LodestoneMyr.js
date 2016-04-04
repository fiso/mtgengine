"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LodestoneMyr extends UnimplementedCard {
  constructor(game) {
    super(game, "Lodestone Myr", "Mirrodin", "MRD");
  }
}

module.exports = LodestoneMyr;
