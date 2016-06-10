"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunscapeBattlemage extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunscape Battlemage", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = SunscapeBattlemage;
