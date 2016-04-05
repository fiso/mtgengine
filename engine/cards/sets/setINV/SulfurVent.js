"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SulfurVent extends UnimplementedCard {
  constructor(game) {
    super(game, "Sulfur Vent", "Invasion", "INV");
  }
}

module.exports = SulfurVent;
