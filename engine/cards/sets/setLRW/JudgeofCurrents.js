"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JudgeofCurrents extends UnimplementedCard {
  constructor(game) {
    super(game, "Judge of Currents", "Lorwyn", "LRW");
  }
}

module.exports = JudgeofCurrents;
