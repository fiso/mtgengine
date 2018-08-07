"use strict";
const Constants = require ("../../../Constants");
const WhispersoftheMuseBase = require("../setTPR/WhispersoftheMuse");

class WhispersoftheMuse extends WhispersoftheMuseBase {
  constructor (game) {
    super(game, "Whispers of the Muse", "Tempest", "TMP");
  }
}

module.exports = WhispersoftheMuse;
