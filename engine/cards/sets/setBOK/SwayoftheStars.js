"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwayoftheStars extends UnimplementedCard {
  constructor(game) {
    super(game, "Sway of the Stars", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SwayoftheStars;
