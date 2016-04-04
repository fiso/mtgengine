"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindHarness extends Card {
  constructor(game) {
    super(game, "Mind Harness", "Mirage", "MIR");
  }
}

module.exports = MindHarness;
