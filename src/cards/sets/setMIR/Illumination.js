"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Illumination extends UnimplementedCard {
  constructor(game) {
    super(game, "Illumination", "Mirage", "MIR");
  }
}

module.exports = Illumination;
