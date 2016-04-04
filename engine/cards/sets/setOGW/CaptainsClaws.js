"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaptainsClaws extends Card {
  constructor(game) {
    super(game, "Captain's Claws", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CaptainsClaws;
