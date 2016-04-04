"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoneTongueBasiliskBase = require("../setODY/StoneTongueBasilisk.js");

class StoneTongueBasilisk extends StoneTongueBasiliskBase {
  constructor(game) {
    super(game, "Stone-Tongue Basilisk", "Prerelease Events", "pPRE");
  }
}

module.exports = StoneTongueBasilisk;
