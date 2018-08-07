"use strict";
const Constants = require ("../../../Constants");
const MishrasHelixBase = require("../setWC00/MishrasHelix");

class MishrasHelix extends MishrasHelixBase {
  constructor (game) {
    super(game, "Mishra's Helix", "World Championship Decks 1999", "WC99");
  }
}

module.exports = MishrasHelix;
