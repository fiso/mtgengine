"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodriteInvoker extends Card {
  constructor(game) {
    super(game, "Bloodrite Invoker", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = BloodriteInvoker;
