"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellSyphon extends UnimplementedCard {
  constructor(game) {
    super(game, "Spell Syphon", "Shadowmoor", "SHM");
  }
}

module.exports = SpellSyphon;
