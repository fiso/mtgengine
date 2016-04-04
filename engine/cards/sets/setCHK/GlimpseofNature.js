"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlimpseofNature extends Card {
  constructor(game) {
    super(game, "Glimpse of Nature", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GlimpseofNature;
