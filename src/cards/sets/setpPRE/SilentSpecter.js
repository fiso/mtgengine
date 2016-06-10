"use strict";
const Constants = require ("../../../Constants");
const SilentSpecterBase = require("../setONS/SilentSpecter");

class SilentSpecter extends SilentSpecterBase {
  constructor (game) {
    super(game, "Silent Specter", "Prerelease Events", "pPRE");
  }
}

module.exports = SilentSpecter;
