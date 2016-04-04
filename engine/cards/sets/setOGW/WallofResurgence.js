"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofResurgence extends Card {
  constructor(game) {
    super(game, "Wall of Resurgence", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WallofResurgence;
