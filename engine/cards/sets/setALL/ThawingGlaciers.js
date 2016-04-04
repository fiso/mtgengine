"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThawingGlaciers extends Card {
  constructor(game) {
    super(game, "Thawing Glaciers", "Alliances", "ALL");
  }
}

module.exports = ThawingGlaciers;
