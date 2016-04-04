"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CycloneSire extends Card {
  constructor(game) {
    super(game, "Cyclone Sire", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CycloneSire;
