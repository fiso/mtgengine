"use strict";
const Constants = require ("../../../Constants");
const TorrentofSoulsBase = require("../setARC/TorrentofSouls");

class TorrentofSouls extends TorrentofSoulsBase {
  constructor (game) {
    super(game, "Torrent of Souls", "Shadowmoor", "SHM");
  }
}

module.exports = TorrentofSouls;
