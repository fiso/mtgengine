"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SedgeTroll extends Card {
  constructor(game) {
    super(game, "Sedge Troll", "Collector's Edition", "CED");
  }
}

module.exports = SedgeTroll;
