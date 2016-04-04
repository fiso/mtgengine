"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightoftheWhiteOrchid extends Card {
  constructor(game) {
    super(game, "Knight of the White Orchid", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnightoftheWhiteOrchid;
