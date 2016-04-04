"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderDragon extends Card {
  constructor(game) {
    super(game, "Thunder Dragon", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ThunderDragon;
