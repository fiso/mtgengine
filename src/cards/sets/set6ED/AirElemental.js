"use strict";
const Constants = require ("../../../Constants");
const AirElementalBase = require("../setBRB/AirElemental");

class AirElemental extends AirElementalBase {
  constructor(game) {
    super(game, "Air Elemental", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AirElemental;
