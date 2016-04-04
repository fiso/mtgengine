"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TriclopeanSight extends Card {
  constructor(game) {
    super(game, "Triclopean Sight", "Lorwyn", "LRW");
  }
}

module.exports = TriclopeanSight;
