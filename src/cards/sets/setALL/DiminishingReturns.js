"use strict";
const Constants = require ("../../../Constants");
const DiminishingReturnsBase = require("../setEMA/DiminishingReturns");

class DiminishingReturns extends DiminishingReturnsBase {
  constructor (game) {
    super(game, "Diminishing Returns", "Alliances", "ALL");
  }
}

module.exports = DiminishingReturns;
