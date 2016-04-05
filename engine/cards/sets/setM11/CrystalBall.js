"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystalBall extends UnimplementedCard {
  constructor(game) {
    super(game, "Crystal Ball", "Magic 2011", "M11");
  }
}

module.exports = CrystalBall;
