"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrudgeReavers extends Card {
  constructor(game) {
    super(game, "Drudge Reavers", "Time Spiral", "TSP");
  }
}

module.exports = DrudgeReavers;
