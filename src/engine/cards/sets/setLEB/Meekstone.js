"use strict";
const Constants = require ("../../../Constants");
const MeekstoneBase = require("../setMPS/Meekstone");

class Meekstone extends MeekstoneBase {
  constructor (game) {
    super(game, "Meekstone", "Limited Edition Beta", "LEB");
  }
}

module.exports = Meekstone;
