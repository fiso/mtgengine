"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandraFlamecaller extends UnimplementedCard {
  constructor(game) {
    super(game, "Chandra, Flamecaller", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ChandraFlamecaller;
