"use strict";
const Constants = require ("../../../Constants");
const GrindstoneBase = require("../setMPS/Grindstone");

class Grindstone extends GrindstoneBase {
  constructor (game) {
    super(game, "Grindstone", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Grindstone;
