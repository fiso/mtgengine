"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpellskiteBase = require("../setMM2/Spellskite.js");

class Spellskite extends SpellskiteBase {
  constructor(game) {
    super(game, "Spellskite", "New Phyrexia", "NPH");
  }
}

module.exports = Spellskite;
