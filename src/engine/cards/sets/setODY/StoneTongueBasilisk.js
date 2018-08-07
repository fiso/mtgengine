"use strict";
const Constants = require ("../../../Constants");
const StoneTongueBasiliskBase = require("../setPRM/StoneTongueBasilisk");

class StoneTongueBasilisk extends StoneTongueBasiliskBase {
  constructor (game) {
    super(game, "Stone-Tongue Basilisk", "Odyssey", "ODY");
  }
}

module.exports = StoneTongueBasilisk;
