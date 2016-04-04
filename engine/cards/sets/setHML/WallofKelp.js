"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofKelp extends Card {
  constructor(game) {
    super(game, "Wall of Kelp", "Homelands", "HML");
  }
}

module.exports = WallofKelp;
