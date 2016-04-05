"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LandCap extends UnimplementedCard {
  constructor(game) {
    super(game, "Land Cap", "Ice Age", "ICE");
  }
}

module.exports = LandCap;
