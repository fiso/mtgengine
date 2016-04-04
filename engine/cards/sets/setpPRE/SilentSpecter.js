"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilentSpecterBase = require("../setONS/SilentSpecter.js");

class SilentSpecter extends SilentSpecterBase {
  constructor(game) {
    super(game, "Silent Specter", "Prerelease Events", "pPRE");
  }
}

module.exports = SilentSpecter;
