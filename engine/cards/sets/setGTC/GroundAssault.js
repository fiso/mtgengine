"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GroundAssault extends Card {
  constructor(game) {
    super(game, "Ground Assault", "Gatecrash", "GTC");
  }
}

module.exports = GroundAssault;
