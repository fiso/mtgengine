"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DimirCharm extends Card {
  constructor(game) {
    super(game, "Dimir Charm", "Friday Night Magic", "pFNM");
  }
}

module.exports = DimirCharm;
