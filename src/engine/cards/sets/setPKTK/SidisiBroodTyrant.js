"use strict";
const Constants = require ("../../../Constants");
const SidisiBroodTyrantBase = require("../setKTK/SidisiBroodTyrant");

class SidisiBroodTyrant extends SidisiBroodTyrantBase {
  constructor (game) {
    super(game, "Sidisi, Brood Tyrant", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = SidisiBroodTyrant;
