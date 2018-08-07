"use strict";
const Constants = require ("../../../Constants");
const BloodArtistBase = require("../setC17/BloodArtist");

class BloodArtist extends BloodArtistBase {
  constructor (game) {
    super(game, "Blood Artist", "Eternal Masters", "EMA");
  }
}

module.exports = BloodArtist;
