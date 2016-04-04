"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆtherSpellbombBase = require("../setARC/ÆtherSpellbomb.js");

class ÆtherSpellbomb extends ÆtherSpellbombBase {
  constructor(game) {
    super(game, "Æther Spellbomb", "Modern Masters", "MMA");
  }
}

module.exports = ÆtherSpellbomb;
