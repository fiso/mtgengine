"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlayeroftheWicked extends Card {
  constructor(game) {
    super(game, "Slayer of the Wicked", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = SlayeroftheWicked;
