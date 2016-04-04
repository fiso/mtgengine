"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeedleSpires extends Card {
  constructor(game) {
    super(game, "Needle Spires", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NeedleSpires;
