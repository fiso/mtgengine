"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellPierce extends Card {
  constructor(game) {
    super(game, "Spell Pierce", "Zendikar", "ZEN");
  }
}

module.exports = SpellPierce;
