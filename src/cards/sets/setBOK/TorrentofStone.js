"use strict";
const Constants = require ("../../../Constants");
const TorrentofStoneBase = require("../setMMA/TorrentofStone");

class TorrentofStone extends TorrentofStoneBase {
  constructor (game) {
    super(game, "Torrent of Stone", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TorrentofStone;
