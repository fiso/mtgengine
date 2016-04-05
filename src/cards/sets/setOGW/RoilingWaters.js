"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoilingWaters extends UnimplementedCard {
  constructor(game) {
    super(game, "Roiling Waters", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = RoilingWaters;
