"use strict";
const Constants = require ("../../../Constants");
const SerrasEmbraceBase = require("../setDD3_DVD/SerrasEmbrace");

class SerrasEmbrace extends SerrasEmbraceBase {
  constructor (game) {
    super(game, "Serra's Embrace", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = SerrasEmbrace;
