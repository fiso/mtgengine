"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientDen extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancient Den", "Mirrodin", "MRD");
  }
}

module.exports = AncientDen;
