"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianTotem extends Card {
  constructor(game) {
    super(game, "Phyrexian Totem", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianTotem;
