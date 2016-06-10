"use strict";
const Constants = require ("../../../Constants");
const AirElementalBase = require("../setBRB/AirElemental");

class AirElemental extends AirElementalBase {
  constructor (game) {
    super(game, "Air Elemental", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = AirElemental;
