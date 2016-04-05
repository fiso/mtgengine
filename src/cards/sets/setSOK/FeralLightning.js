"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralLightning extends UnimplementedCard {
  constructor(game) {
    super(game, "Feral Lightning", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = FeralLightning;
