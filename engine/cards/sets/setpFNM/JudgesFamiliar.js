"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JudgesFamiliar extends UnimplementedCard {
  constructor(game) {
    super(game, "Judge's Familiar", "Friday Night Magic", "pFNM");
  }
}

module.exports = JudgesFamiliar;
