"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CycloneSire extends UnimplementedCard {
  constructor(game) {
    super(game, "Cyclone Sire", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CycloneSire;
