"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AquamoebaBase = require("../setTOR/Aquamoeba.js");

class Aquamoeba extends AquamoebaBase {
  constructor(game) {
    super(game, "Aquamoeba", "Vintage Masters", "VMA");
  }
}

module.exports = Aquamoeba;
