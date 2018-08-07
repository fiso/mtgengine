"use strict";
const Constants = require ("../../../Constants");
const KarametrasFavorBase = require("../setBBD/KarametrasFavor");

class KarametrasFavor extends KarametrasFavorBase {
  constructor (game) {
    super(game, "Karametra's Favor", "Born of the Gods", "BNG");
  }
}

module.exports = KarametrasFavor;
