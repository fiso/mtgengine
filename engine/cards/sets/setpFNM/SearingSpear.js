"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SearingSpear extends Card {
  constructor(game) {
    super(game, "Searing Spear", "Friday Night Magic", "pFNM");
  }
}

module.exports = SearingSpear;
