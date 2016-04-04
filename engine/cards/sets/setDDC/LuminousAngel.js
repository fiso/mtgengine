"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LuminousAngelBase = require("../setDD3_DVD/LuminousAngel.js");

class LuminousAngel extends LuminousAngelBase {
  constructor(game) {
    super(game, "Luminous Angel", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = LuminousAngel;
