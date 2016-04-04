"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeoninSkyhunter extends Card {
  constructor(game) {
    super(game, "Leonin Skyhunter", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = LeoninSkyhunter;
