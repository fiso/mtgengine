"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KitsunePalliator extends Card {
  constructor(game) {
    super(game, "Kitsune Palliator", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KitsunePalliator;
