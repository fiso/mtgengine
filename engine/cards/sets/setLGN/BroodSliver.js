"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BroodSliver extends Card {
  constructor(game) {
    super(game, "Brood Sliver", "Legions", "LGN");
  }
}

module.exports = BroodSliver;
