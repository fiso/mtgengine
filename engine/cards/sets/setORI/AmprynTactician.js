"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmprynTactician extends UnimplementedCard {
  constructor(game) {
    super(game, "Ampryn Tactician", "Magic Origins", "ORI");
  }
}

module.exports = AmprynTactician;
