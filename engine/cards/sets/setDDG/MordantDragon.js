"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MordantDragon extends Card {
  constructor(game) {
    super(game, "Mordant Dragon", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = MordantDragon;
