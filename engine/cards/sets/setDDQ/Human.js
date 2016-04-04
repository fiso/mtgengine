"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Human extends Card {
  constructor(game) {
    super(game, "Human", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Human;
