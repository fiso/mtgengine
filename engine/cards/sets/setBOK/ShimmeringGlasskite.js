"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShimmeringGlasskite extends Card {
  constructor(game) {
    super(game, "Shimmering Glasskite", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ShimmeringGlasskite;
