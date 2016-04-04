"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiminishingReturns extends Card {
  constructor(game) {
    super(game, "Diminishing Returns", "Alliances", "ALL");
  }
}

module.exports = DiminishingReturns;
