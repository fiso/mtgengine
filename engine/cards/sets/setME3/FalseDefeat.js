"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalseDefeat extends Card {
  constructor(game) {
    super(game, "False Defeat", "Masters Edition III", "ME3");
  }
}

module.exports = FalseDefeat;
