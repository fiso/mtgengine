"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThornscapeBattlemage extends Card {
  constructor(game) {
    super(game, "Thornscape Battlemage", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ThornscapeBattlemage;
