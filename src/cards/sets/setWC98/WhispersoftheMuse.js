"use strict";
const Constants = require ("../../../Constants");
const WhispersoftheMuseBase = require("../setTPR/WhispersoftheMuse");

class WhispersoftheMuse extends WhispersoftheMuseBase {
  constructor (game) {
    super(game, "Whispers of the Muse", "World Championship Decks 1998", "WC98");
  }
}

module.exports = WhispersoftheMuse;
