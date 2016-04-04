"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrySpell extends Card {
  constructor(game) {
    super(game, "Dry Spell", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DrySpell;
