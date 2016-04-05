"use strict";
const Constants = require ("../../../Constants");
const UrborgSyphonMageBase = require("../setARC/UrborgSyphonMage");

class UrborgSyphonMage extends UrborgSyphonMageBase {
  constructor(game) {
    super(game, "Urborg Syphon-Mage", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = UrborgSyphonMage;
