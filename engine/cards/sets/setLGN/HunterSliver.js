"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HunterSliver extends Card {
  constructor(game) {
    super(game, "Hunter Sliver", "Legions", "LGN");
  }
}

module.exports = HunterSliver;
