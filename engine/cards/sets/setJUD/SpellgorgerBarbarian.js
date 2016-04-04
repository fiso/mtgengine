"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellgorgerBarbarian extends Card {
  constructor(game) {
    super(game, "Spellgorger Barbarian", "Judgment", "JUD");
  }
}

module.exports = SpellgorgerBarbarian;
