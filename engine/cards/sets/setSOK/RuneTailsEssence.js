"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuneTailsEssence extends Card {
  constructor(game) {
    super(game, "Rune-Tail's Essence", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RuneTailsEssence;
