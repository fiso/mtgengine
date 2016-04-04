"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoilingWaters extends Card {
  constructor(game) {
    super(game, "Roiling Waters", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = RoilingWaters;
