"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogardanRager extends Card {
  constructor(game) {
    super(game, "Bogardan Rager", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = BogardanRager;
