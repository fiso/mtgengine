"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindHarness extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Harness", "Mirage", "MIR");
  }
}

module.exports = MindHarness;
