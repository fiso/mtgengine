"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpellSnareBase = require("../setDIS/SpellSnare.js");

class SpellSnare extends SpellSnareBase {
  constructor(game) {
    super(game, "Spell Snare", "Modern Masters", "MMA");
  }
}

module.exports = SpellSnare;
