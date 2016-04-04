"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlithFirewalker extends Card {
  constructor(game) {
    super(game, "Slith Firewalker", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = SlithFirewalker;
