"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MammothHarness extends Card {
  constructor(game) {
    super(game, "Mammoth Harness", "Homelands", "HML");
  }
}

module.exports = MammothHarness;
