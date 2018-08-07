"use strict";
const Constants = require ("../../../Constants");
const TorrentElementalBase = require("../setFRF/TorrentElemental");

class TorrentElemental extends TorrentElementalBase {
  constructor (game) {
    super(game, "Torrent Elemental", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = TorrentElemental;
