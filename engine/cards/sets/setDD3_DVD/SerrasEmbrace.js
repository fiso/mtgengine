"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerrasEmbrace extends Card {
  constructor(game) {
    super(game, "Serra's Embrace", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = SerrasEmbrace;
