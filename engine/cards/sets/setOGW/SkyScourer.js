"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyScourer extends Card {
  constructor(game) {
    super(game, "Sky Scourer", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SkyScourer;
