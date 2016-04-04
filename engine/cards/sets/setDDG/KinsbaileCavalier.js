"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KinsbaileCavalier extends Card {
  constructor(game) {
    super(game, "Kinsbaile Cavalier", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KinsbaileCavalier;
