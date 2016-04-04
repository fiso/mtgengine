"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerrasBoon extends Card {
  constructor(game) {
    super(game, "Serra's Boon", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = SerrasBoon;
