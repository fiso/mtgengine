"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aquamoeba extends UnimplementedCard {
  constructor (game) {
    super(game, "Aquamoeba", "Vintage Masters", "VMA");
  }
}

module.exports = Aquamoeba;
