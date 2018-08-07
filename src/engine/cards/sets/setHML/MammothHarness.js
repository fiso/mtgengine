"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MammothHarness extends UnimplementedCard {
  constructor (game) {
    super(game, "Mammoth Harness", "Homelands", "HML");
  }
}

module.exports = MammothHarness;
