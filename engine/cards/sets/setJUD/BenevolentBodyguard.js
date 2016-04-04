"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenevolentBodyguard extends Card {
  constructor(game) {
    super(game, "Benevolent Bodyguard", "Judgment", "JUD");
  }
}

module.exports = BenevolentBodyguard;
