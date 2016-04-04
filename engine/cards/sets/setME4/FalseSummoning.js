"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalseSummoning extends Card {
  constructor(game) {
    super(game, "False Summoning", "Masters Edition IV", "ME4");
  }
}

module.exports = FalseSummoning;
