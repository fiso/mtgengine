"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneforgeAcolyte extends UnimplementedCard {
  constructor(game) {
    super(game, "Stoneforge Acolyte", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StoneforgeAcolyte;
