"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderscapeBattlemage extends UnimplementedCard {
  constructor(game) {
    super(game, "Thunderscape Battlemage", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ThunderscapeBattlemage;
