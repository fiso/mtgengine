"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConsumeSpirit extends Card {
  constructor(game) {
    super(game, "Consume Spirit", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = ConsumeSpirit;
