"use strict";
const Constants = require ("../../../Constants");
const NinthePainArtistBase = require("../setJ18/NinthePainArtist");

class NinthePainArtist extends NinthePainArtistBase {
  constructor (game) {
    super(game, "Nin, the Pain Artist", "Commander 2011", "CMD");
  }
}

module.exports = NinthePainArtist;
