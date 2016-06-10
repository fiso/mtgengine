"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerrasEmbrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra's Embrace", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = SerrasEmbrace;
