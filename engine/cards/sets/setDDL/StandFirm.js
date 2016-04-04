"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StandFirm extends Card {
  constructor(game) {
    super(game, "Stand Firm", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = StandFirm;
