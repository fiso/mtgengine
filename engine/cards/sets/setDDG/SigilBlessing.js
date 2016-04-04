"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SigilBlessing extends Card {
  constructor(game) {
    super(game, "Sigil Blessing", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SigilBlessing;
