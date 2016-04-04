"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShimmeringGrotto extends Card {
  constructor(game) {
    super(game, "Shimmering Grotto", "Innistrad", "ISD");
  }
}

module.exports = ShimmeringGrotto;
