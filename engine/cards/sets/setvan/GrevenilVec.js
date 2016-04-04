"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrevenilVec extends Card {
  constructor(game) {
    super(game, "Greven il-Vec", "Vanguard", "VAN");
  }
}

module.exports = GrevenilVec;
