"use strict";
const Constants = require ("../../../Constants");
const AirElementalBase = require("../setBRB/AirElemental");

class AirElemental extends AirElementalBase {
  constructor (game) {
    super(game, "Air Elemental", "Magic 2010", "M10");
  }
}

module.exports = AirElemental;
