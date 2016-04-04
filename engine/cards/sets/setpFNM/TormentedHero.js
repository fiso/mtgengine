"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TormentedHero extends Card {
  constructor(game) {
    super(game, "Tormented Hero", "Friday Night Magic", "pFNM");
  }
}

module.exports = TormentedHero;
