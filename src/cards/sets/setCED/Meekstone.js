"use strict";
const Constants = require ("../../../Constants");
const MeekstoneBase = require("../set6ED/Meekstone");

class Meekstone extends MeekstoneBase {
  constructor (game) {
    super(game, "Meekstone", "Collector's Edition", "CED");
  }
}

module.exports = Meekstone;
