"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlatedSliver extends Card {
  constructor(game) {
    super(game, "Plated Sliver", "Legions", "LGN");
  }
}

module.exports = PlatedSliver;
