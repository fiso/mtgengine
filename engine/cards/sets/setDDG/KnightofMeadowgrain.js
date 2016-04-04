"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightofMeadowgrain extends Card {
  constructor(game) {
    super(game, "Knight of Meadowgrain", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnightofMeadowgrain;
