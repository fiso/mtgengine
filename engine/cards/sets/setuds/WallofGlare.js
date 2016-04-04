"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofGlare extends Card {
  constructor(game) {
    super(game, "Wall of Glare", "Urza's Destiny", "UDS");
  }
}

module.exports = WallofGlare;
