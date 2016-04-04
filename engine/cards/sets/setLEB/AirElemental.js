"use strict";
const Constants = require ("../../../Constants");
const AirElementalBase = require("../setBRB/AirElemental");

class AirElemental extends AirElementalBase {
  constructor(game) {
    super(game, "Air Elemental", "Limited Edition Beta", "LEB");
  }
}

module.exports = AirElemental;
