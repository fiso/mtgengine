"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SidisiBroodTyrantBase = require("../setKTK/SidisiBroodTyrant.js");

class SidisiBroodTyrant extends SidisiBroodTyrantBase {
  constructor(game) {
    super(game, "Sidisi, Brood Tyrant", "Prerelease Events", "pPRE");
  }
}

module.exports = SidisiBroodTyrant;
