"use strict";
const Constants = require ("../../../Constants");
const TorrentofSoulsBase = require("../setARC/TorrentofSouls");

class TorrentofSouls extends TorrentofSoulsBase {
  constructor (game) {
    super(game, "Torrent of Souls", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = TorrentofSouls;
