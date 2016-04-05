"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TritonTactics extends UnimplementedCard {
  constructor(game) {
    super(game, "Triton Tactics", "Theros", "THS");
  }
}

module.exports = TritonTactics;
