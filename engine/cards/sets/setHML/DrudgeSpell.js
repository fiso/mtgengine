"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrudgeSpell extends Card {
  constructor(game) {
    super(game, "Drudge Spell", "Homelands", "HML");
  }
}

module.exports = DrudgeSpell;
