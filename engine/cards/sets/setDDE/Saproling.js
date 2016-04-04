"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Saproling extends Card {
  constructor(game) {
    super(game, "Saproling", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = Saproling;
