"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhastlyRemains extends Card {
  constructor(game) {
    super(game, "Ghastly Remains", "Legions", "LGN");
  }
}

module.exports = GhastlyRemains;
