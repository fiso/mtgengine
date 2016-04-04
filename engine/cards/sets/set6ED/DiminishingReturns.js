"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiminishingReturnsBase = require("../setALL/DiminishingReturns.js");

class DiminishingReturns extends DiminishingReturnsBase {
  constructor(game) {
    super(game, "Diminishing Returns", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DiminishingReturns;
