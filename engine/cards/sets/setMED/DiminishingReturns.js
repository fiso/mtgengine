"use strict";
const Constants = require ("../../../Constants");
const DiminishingReturnsBase = require("../setALL/DiminishingReturns");

class DiminishingReturns extends DiminishingReturnsBase {
  constructor(game) {
    super(game, "Diminishing Returns", "Masters Edition", "MED");
  }
}

module.exports = DiminishingReturns;
