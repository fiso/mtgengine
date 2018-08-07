"use strict";
const Constants = require ("../../../Constants");
const HellkiteTyrantBase = require("../setC16/HellkiteTyrant");

class HellkiteTyrant extends HellkiteTyrantBase {
  constructor (game) {
    super(game, "Hellkite Tyrant", "Gatecrash", "GTC");
  }
}

module.exports = HellkiteTyrant;
