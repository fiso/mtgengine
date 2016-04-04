"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KinsbaileCavalier extends UnimplementedCard {
  constructor(game) {
    super(game, "Kinsbaile Cavalier", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KinsbaileCavalier;
