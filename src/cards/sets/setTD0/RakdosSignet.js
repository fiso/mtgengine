"use strict";
const Constants = require ("../../../Constants");
const RakdosSignetBase = require("../setC17/RakdosSignet");

class RakdosSignet extends RakdosSignetBase {
  constructor (game) {
    super(game, "Rakdos Signet", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = RakdosSignet;
