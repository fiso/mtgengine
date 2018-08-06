"use strict";
const Constants = require ("../../../Constants");
const BloodArtistBase = require("../setAVR/BloodArtist");

class BloodArtist extends BloodArtistBase {
  constructor (game) {
    super(game, "Blood Artist", "Eternal Masters", "EMA");
  }
}

module.exports = BloodArtist;
