"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwayoftheStars extends Card {
  constructor(game) {
    super(game, "Sway of the Stars", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SwayoftheStars;
