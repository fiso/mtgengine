"use strict";
const Constants = require ("../../../Constants");
const StoneTongueBasiliskBase = require("../setPRM/StoneTongueBasilisk");

class StoneTongueBasilisk extends StoneTongueBasiliskBase {
  constructor (game) {
    super(game, "Stone-Tongue Basilisk", "Prerelease Events", "PPRE");
  }
}

module.exports = StoneTongueBasilisk;
