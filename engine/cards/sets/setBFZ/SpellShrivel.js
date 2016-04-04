"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellShrivel extends Card {
  constructor(game) {
    super(game, "Spell Shrivel", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SpellShrivel;
