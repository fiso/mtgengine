"use strict";
const Constants = require ("../../../Constants");
const AquamoebaBase = require("../setTOR/Aquamoeba");

class Aquamoeba extends AquamoebaBase {
  constructor (game) {
    super(game, "Aquamoeba", "Vintage Masters", "VMA");
  }
}

module.exports = Aquamoeba;
