"use strict";
const Constants = require ("../../../Constants");
const MeekstoneBase = require("../setMPS/Meekstone");

class Meekstone extends MeekstoneBase {
  constructor (game) {
    super(game, "Meekstone", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Meekstone;
