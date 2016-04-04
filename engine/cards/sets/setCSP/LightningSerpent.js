"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningSerpent extends Card {
  constructor(game) {
    super(game, "Lightning Serpent", "Coldsnap", "CSP");
  }
}

module.exports = LightningSerpent;
