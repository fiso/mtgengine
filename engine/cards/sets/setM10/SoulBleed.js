"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulBleed extends Card {
  constructor(game) {
    super(game, "Soul Bleed", "Magic 2010", "M10");
  }
}

module.exports = SoulBleed;
