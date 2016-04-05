"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellweaverHelix extends UnimplementedCard {
  constructor(game) {
    super(game, "Spellweaver Helix", "Mirrodin", "MRD");
  }
}

module.exports = SpellweaverHelix;
