"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildheartInvoker extends Card {
  constructor(game) {
    super(game, "Wildheart Invoker", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = WildheartInvoker;
