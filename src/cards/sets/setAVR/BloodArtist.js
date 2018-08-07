"use strict";
const Constants = require ("../../../Constants");
const BloodArtistBase = require("../setC17/BloodArtist");

class BloodArtist extends BloodArtistBase {
  constructor (game) {
    super(game, "Blood Artist", "Avacyn Restored", "AVR");
  }
}

module.exports = BloodArtist;
