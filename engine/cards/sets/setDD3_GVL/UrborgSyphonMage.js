"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrborgSyphonMageBase = require("../setARC/UrborgSyphonMage.js");

class UrborgSyphonMage extends UrborgSyphonMageBase {
  constructor(game) {
    super(game, "Urborg Syphon-Mage", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = UrborgSyphonMage;
