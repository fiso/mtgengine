"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoldenBear extends Card {
  constructor(game) {
    super(game, "Golden Bear", "Portal Second Age", "PO2");
  }
}

module.exports = GoldenBear;
