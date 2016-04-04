"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SokenzanSpellblade extends Card {
  constructor(game) {
    super(game, "Sokenzan Spellblade", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SokenzanSpellblade;
