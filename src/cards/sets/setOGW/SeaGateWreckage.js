"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaGateWreckage extends UnimplementedCard {
  constructor(game) {
    super(game, "Sea Gate Wreckage", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SeaGateWreckage;
