"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofResurgence extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Resurgence", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WallofResurgence;
