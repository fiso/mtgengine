"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeedleSpires extends UnimplementedCard {
  constructor(game) {
    super(game, "Needle Spires", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NeedleSpires;
