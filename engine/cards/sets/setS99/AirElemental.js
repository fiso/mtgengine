"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AirElementalBase = require("../setBRB/AirElemental.js");

class AirElemental extends AirElementalBase {
  constructor(game) {
    super(game, "Air Elemental", "Starter 1999", "S99");
  }
}

module.exports = AirElemental;
