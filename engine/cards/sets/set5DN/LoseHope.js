"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoseHope extends Card {
  constructor(game) {
    super(game, "Lose Hope", "Fifth Dawn", "5DN");
  }
}

module.exports = LoseHope;
