"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellCounter extends Card {
  constructor(game) {
    super(game, "Spell Counter", "Unhinged", "UNH");
  }
}

module.exports = SpellCounter;
