"use strict";
const Constants = require ("../../../Constants");
const AirElementalBase = require("../setM19/AirElemental");

class AirElemental extends AirElementalBase {
  constructor (game) {
    super(game, "Air Elemental", "Fifth Edition", "5ED");
  }
}

module.exports = AirElemental;
