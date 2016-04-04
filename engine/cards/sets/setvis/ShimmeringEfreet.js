"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShimmeringEfreet extends Card {
  constructor(game) {
    super(game, "Shimmering Efreet", "Visions", "VIS");
  }
}

module.exports = ShimmeringEfreet;
