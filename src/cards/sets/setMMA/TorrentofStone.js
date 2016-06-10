"use strict";
const Constants = require ("../../../Constants");
const TorrentofStoneBase = require("../setBOK/TorrentofStone");

class TorrentofStone extends TorrentofStoneBase {
  constructor (game) {
    super(game, "Torrent of Stone", "Modern Masters", "MMA");
  }
}

module.exports = TorrentofStone;
