"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoamLarva extends UnimplementedCard {
  constructor(game) {
    super(game, "Loam Larva", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = LoamLarva;
