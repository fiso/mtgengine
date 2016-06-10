"use strict";
const Constants = require ("../../../Constants");
const MeekstoneBase = require("../set6ED/Meekstone");

class Meekstone extends MeekstoneBase {
  constructor (game) {
    super(game, "Meekstone", "Seventh Edition", "7ED");
  }
}

module.exports = Meekstone;
