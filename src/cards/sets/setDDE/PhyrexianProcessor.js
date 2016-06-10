"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianProcessor extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Processor", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianProcessor;
