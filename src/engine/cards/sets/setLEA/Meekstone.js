"use strict";
const Constants = require ("../../../Constants");
const MeekstoneBase = require("../setMPS/Meekstone");

class Meekstone extends MeekstoneBase {
  constructor (game) {
    super(game, "Meekstone", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Meekstone;
