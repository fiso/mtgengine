"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExplorersScope extends Card {
  constructor(game) {
    super(game, "Explorer's Scope", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ExplorersScope;
