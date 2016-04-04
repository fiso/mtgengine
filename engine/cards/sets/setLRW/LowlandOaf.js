"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LowlandOaf extends Card {
  constructor(game) {
    super(game, "Lowland Oaf", "Lorwyn", "LRW");
  }
}

module.exports = LowlandOaf;
