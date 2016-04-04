"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RonomSerpent extends Card {
  constructor(game) {
    super(game, "Ronom Serpent", "Coldsnap", "CSP");
  }
}

module.exports = RonomSerpent;
