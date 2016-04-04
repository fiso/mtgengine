"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ItThatBetrays extends Card {
  constructor(game) {
    super(game, "It That Betrays", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ItThatBetrays;
