"use strict";
const Constants = require ("../../../Constants");
const RhoxBruteBase = require("../setBBD/RhoxBrute");

class RhoxBrute extends RhoxBruteBase {
  constructor (game) {
    super(game, "Rhox Brute", "Alara Reborn", "ARB");
  }
}

module.exports = RhoxBrute;
