"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightofCliffhaven extends Card {
  constructor(game) {
    super(game, "Knight of Cliffhaven", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnightofCliffhaven;
