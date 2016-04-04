"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuietSpeculation extends Card {
  constructor(game) {
    super(game, "Quiet Speculation", "Judgment", "JUD");
  }
}

module.exports = QuietSpeculation;
