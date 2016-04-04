"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TwinningGlass extends Card {
  constructor(game) {
    super(game, "Twinning Glass", "Lorwyn", "LRW");
  }
}

module.exports = TwinningGlass;
