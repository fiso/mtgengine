"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkingWall extends UnimplementedCard {
  constructor(game) {
    super(game, "Walking Wall", "Deckmasters", "DKM");
  }
}

module.exports = WalkingWall;
