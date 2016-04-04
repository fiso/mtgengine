"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RootSliver extends Card {
  constructor(game) {
    super(game, "Root Sliver", "Legions", "LGN");
  }
}

module.exports = RootSliver;
