"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BasaltMonolith extends Card {
  constructor(game) {
    super(game, "Basalt Monolith", "Collector's Edition", "CED");
  }
}

module.exports = BasaltMonolith;
