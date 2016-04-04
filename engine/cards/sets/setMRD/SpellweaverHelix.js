"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellweaverHelix extends Card {
  constructor(game) {
    super(game, "Spellweaver Helix", "Mirrodin", "MRD");
  }
}

module.exports = SpellweaverHelix;
