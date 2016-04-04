"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoltariPriest extends Card {
  constructor(game) {
    super(game, "Soltari Priest", "Friday Night Magic", "pFNM");
  }
}

module.exports = SoltariPriest;
