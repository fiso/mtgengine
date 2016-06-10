"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellContortion extends UnimplementedCard {
  constructor (game) {
    super(game, "Spell Contortion", "Worldwake", "WWK");
  }
}

module.exports = SpellContortion;
