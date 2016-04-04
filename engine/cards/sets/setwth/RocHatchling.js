"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RocHatchling extends Card {
  constructor(game) {
    super(game, "Roc Hatchling", "Weatherlight", "WTH");
  }
}

module.exports = RocHatchling;
