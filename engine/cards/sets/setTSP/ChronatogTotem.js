"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChronatogTotem extends Card {
  constructor(game) {
    super(game, "Chronatog Totem", "Time Spiral", "TSP");
  }
}

module.exports = ChronatogTotem;
