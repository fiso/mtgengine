"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderscapeBattlemage extends Card {
  constructor(game) {
    super(game, "Thunderscape Battlemage", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ThunderscapeBattlemage;
