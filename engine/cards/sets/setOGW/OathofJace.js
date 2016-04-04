"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OathofJace extends Card {
  constructor(game) {
    super(game, "Oath of Jace", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OathofJace;
