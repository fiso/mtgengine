"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StonewoodInvoker extends Card {
  constructor(game) {
    super(game, "Stonewood Invoker", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = StonewoodInvoker;
