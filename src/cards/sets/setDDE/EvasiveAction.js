"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvasiveAction extends UnimplementedCard {
  constructor (game) {
    super(game, "Evasive Action", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = EvasiveAction;
