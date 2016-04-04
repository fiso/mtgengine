"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellSnip extends UnimplementedCard {
  constructor(game) {
    super(game, "Spell Snip", "Shards of Alara", "ALA");
  }
}

module.exports = SpellSnip;
