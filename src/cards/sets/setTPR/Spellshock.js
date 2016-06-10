"use strict";
const Constants = require ("../../../Constants");
const SpellshockBase = require("../setEXO/Spellshock");

class Spellshock extends SpellshockBase {
  constructor (game) {
    super(game, "Spellshock", "Tempest Remastered", "TPR");
  }
}

module.exports = Spellshock;
