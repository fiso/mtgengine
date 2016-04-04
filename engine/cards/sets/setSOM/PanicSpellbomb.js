"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PanicSpellbombBase = require("../setC14/PanicSpellbomb.js");

class PanicSpellbomb extends PanicSpellbombBase {
  constructor(game) {
    super(game, "Panic Spellbomb", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PanicSpellbomb;
