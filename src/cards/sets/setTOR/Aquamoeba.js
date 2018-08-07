"use strict";
const Constants = require ("../../../Constants");
const AquamoebaBase = require("../setVMA/Aquamoeba");

class Aquamoeba extends AquamoebaBase {
  constructor (game) {
    super(game, "Aquamoeba", "Torment", "TOR");
  }
}

module.exports = Aquamoeba;
