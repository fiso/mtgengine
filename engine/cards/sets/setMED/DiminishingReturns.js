"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiminishingReturnsBase = require("../setALL/DiminishingReturns.js");

class DiminishingReturns extends DiminishingReturnsBase {
  constructor(game) {
    super(game, "Diminishing Returns", "Masters Edition", "MED");
  }
}

module.exports = DiminishingReturns;
