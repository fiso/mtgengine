"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PithingNeedle extends Card {
  constructor(game) {
    super(game, "Pithing Needle", "Magic 2010", "M10");
  }
}

module.exports = PithingNeedle;
