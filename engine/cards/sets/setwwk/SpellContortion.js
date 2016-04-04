"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellContortion extends Card {
  constructor(game) {
    super(game, "Spell Contortion", "Worldwake", "WWK");
  }
}

module.exports = SpellContortion;
