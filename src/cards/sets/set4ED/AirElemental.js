"use strict";
const Constants = require ("../../../Constants");
const AirElementalBase = require("../setBRB/AirElemental");

class AirElemental extends AirElementalBase {
  constructor(game) {
    super(game, "Air Elemental", "Fourth Edition", "4ED");
  }
}

module.exports = AirElemental;
