"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CastleSengir extends Card {
  constructor(game) {
    super(game, "Castle Sengir", "Homelands", "HML");
  }
}

module.exports = CastleSengir;
