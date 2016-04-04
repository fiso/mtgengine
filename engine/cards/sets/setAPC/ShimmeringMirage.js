"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShimmeringMirage extends Card {
  constructor(game) {
    super(game, "Shimmering Mirage", "Apocalypse", "APC");
  }
}

module.exports = ShimmeringMirage;
