"use strict";
const Constants = require ("../../../Constants");
const MeekstoneBase = require("../set6ED/Meekstone");

class Meekstone extends MeekstoneBase {
  constructor(game) {
    super(game, "Meekstone", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Meekstone;
