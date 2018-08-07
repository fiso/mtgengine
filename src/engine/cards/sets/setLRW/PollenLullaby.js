"use strict";
const Constants = require ("../../../Constants");
const PollenLullabyBase = require("../setCMD/PollenLullaby");

class PollenLullaby extends PollenLullabyBase {
  constructor (game) {
    super(game, "Pollen Lullaby", "Lorwyn", "LRW");
  }
}

module.exports = PollenLullaby;
