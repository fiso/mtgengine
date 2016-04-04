"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BasaltGargoyle extends Card {
  constructor(game) {
    super(game, "Basalt Gargoyle", "Time Spiral", "TSP");
  }
}

module.exports = BasaltGargoyle;
