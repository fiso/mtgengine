"use strict";
const Constants = require ("../../../Constants");
const AirElementalBase = require("../setM19/AirElemental");

class AirElemental extends AirElementalBase {
  constructor (game) {
    super(game, "Air Elemental", "Ninth Edition", "9ED");
  }
}

module.exports = AirElemental;
