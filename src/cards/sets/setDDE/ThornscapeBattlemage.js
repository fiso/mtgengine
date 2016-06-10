"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornscapeBattlemage extends UnimplementedCard {
  constructor (game) {
    super(game, "Thornscape Battlemage", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ThornscapeBattlemage;
