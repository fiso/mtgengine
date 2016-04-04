"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeldonWarlord extends Card {
  constructor(game) {
    super(game, "Keldon Warlord", "Collector's Edition", "CED");
  }
}

module.exports = KeldonWarlord;
