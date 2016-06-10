"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThawingGlaciers extends UnimplementedCard {
  constructor (game) {
    super(game, "Thawing Glaciers", "Alliances", "ALL");
  }
}

module.exports = ThawingGlaciers;
