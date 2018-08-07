"use strict";
const Constants = require ("../../../Constants");
const AirElementalBase = require("../setM19/AirElemental");

class AirElemental extends AirElementalBase {
  constructor (game) {
    super(game, "Air Elemental", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = AirElemental;
