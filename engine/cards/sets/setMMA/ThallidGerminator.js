"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThallidGerminator extends Card {
  constructor(game) {
    super(game, "Thallid Germinator", "Modern Masters", "MMA");
  }
}

module.exports = ThallidGerminator;
