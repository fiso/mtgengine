"use strict";
const Constants = require ("../../../Constants");
const SelesnyaSignetBase = require("../setCMA/SelesnyaSignet");

class SelesnyaSignet extends SelesnyaSignetBase {
  constructor (game) {
    super(game, "Selesnya Signet", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = SelesnyaSignet;
