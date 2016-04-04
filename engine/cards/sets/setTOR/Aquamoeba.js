"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aquamoeba extends UnimplementedCard {
  constructor(game) {
    super(game, "Aquamoeba", "Torment", "TOR");
  }
}

module.exports = Aquamoeba;
