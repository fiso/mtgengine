"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TorrentofStoneBase = require("../setBOK/TorrentofStone.js");

class TorrentofStone extends TorrentofStoneBase {
  constructor(game) {
    super(game, "Torrent of Stone", "Modern Masters", "MMA");
  }
}

module.exports = TorrentofStone;
