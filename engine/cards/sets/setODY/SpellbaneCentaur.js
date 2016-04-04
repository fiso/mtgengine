"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellbaneCentaur extends Card {
  constructor(game) {
    super(game, "Spellbane Centaur", "Odyssey", "ODY");
  }
}

module.exports = SpellbaneCentaur;
