"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellCrumple extends Card {
  constructor(game) {
    super(game, "Spell Crumple", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SpellCrumple;
