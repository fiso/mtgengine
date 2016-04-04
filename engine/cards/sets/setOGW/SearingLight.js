"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SearingLight extends Card {
  constructor(game) {
    super(game, "Searing Light", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SearingLight;
