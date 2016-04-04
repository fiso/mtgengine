"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TritonTactics extends Card {
  constructor(game) {
    super(game, "Triton Tactics", "Theros", "THS");
  }
}

module.exports = TritonTactics;
