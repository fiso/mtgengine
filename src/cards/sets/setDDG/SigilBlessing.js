"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigilBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigil Blessing", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SigilBlessing;
