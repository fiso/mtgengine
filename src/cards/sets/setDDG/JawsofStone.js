"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JawsofStone extends UnimplementedCard {
  constructor(game) {
    super(game, "Jaws of Stone", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = JawsofStone;
