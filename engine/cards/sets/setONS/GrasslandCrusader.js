"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrasslandCrusader extends Card {
  constructor(game) {
    super(game, "Grassland Crusader", "Onslaught", "ONS");
  }
}

module.exports = GrasslandCrusader;
