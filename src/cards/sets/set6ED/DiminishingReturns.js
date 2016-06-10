"use strict";
const Constants = require ("../../../Constants");
const DiminishingReturnsBase = require("../setALL/DiminishingReturns");

class DiminishingReturns extends DiminishingReturnsBase {
  constructor (game) {
    super(game, "Diminishing Returns", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DiminishingReturns;
