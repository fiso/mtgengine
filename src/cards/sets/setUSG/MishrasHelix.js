"use strict";
const Constants = require ("../../../Constants");
const MishrasHelixBase = require("../setWC00/MishrasHelix");

class MishrasHelix extends MishrasHelixBase {
  constructor (game) {
    super(game, "Mishra's Helix", "Urza's Saga", "USG");
  }
}

module.exports = MishrasHelix;
