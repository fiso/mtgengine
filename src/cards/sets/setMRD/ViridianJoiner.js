"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianJoiner extends UnimplementedCard {
  constructor(game) {
    super(game, "Viridian Joiner", "Mirrodin", "MRD");
  }
}

module.exports = ViridianJoiner;
