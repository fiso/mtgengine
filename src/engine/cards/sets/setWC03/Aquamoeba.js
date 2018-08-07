"use strict";
const Constants = require ("../../../Constants");
const AquamoebaBase = require("../setVMA/Aquamoeba");

class Aquamoeba extends AquamoebaBase {
  constructor (game) {
    super(game, "Aquamoeba", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Aquamoeba;
