"use strict";
const Constants = require ("../../../Constants");
const UrborgSyphonMageBase = require("../setARC/UrborgSyphonMage");

class UrborgSyphonMage extends UrborgSyphonMageBase {
  constructor (game) {
    super(game, "Urborg Syphon-Mage", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = UrborgSyphonMage;
