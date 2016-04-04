"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NissasJudgment extends Card {
  constructor(game) {
    super(game, "Nissa's Judgment", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NissasJudgment;
