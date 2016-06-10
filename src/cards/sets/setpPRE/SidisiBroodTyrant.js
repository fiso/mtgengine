"use strict";
const Constants = require ("../../../Constants");
const SidisiBroodTyrantBase = require("../setKTK/SidisiBroodTyrant");

class SidisiBroodTyrant extends SidisiBroodTyrantBase {
  constructor (game) {
    super(game, "Sidisi, Brood Tyrant", "Prerelease Events", "pPRE");
  }
}

module.exports = SidisiBroodTyrant;
