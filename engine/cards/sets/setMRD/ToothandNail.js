"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToothandNail extends UnimplementedCard {
  constructor(game) {
    super(game, "Tooth and Nail", "Mirrodin", "MRD");
  }
}

module.exports = ToothandNail;
