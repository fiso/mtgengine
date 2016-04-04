"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpellshockBase = require("../setEXO/Spellshock.js");

class Spellshock extends SpellshockBase {
  constructor(game) {
    super(game, "Spellshock", "Tempest Remastered", "TPR");
  }
}

module.exports = Spellshock;
