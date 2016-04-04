"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JudgesFamiliar extends Card {
  constructor(game) {
    super(game, "Judge's Familiar", "Friday Night Magic", "pFNM");
  }
}

module.exports = JudgesFamiliar;
