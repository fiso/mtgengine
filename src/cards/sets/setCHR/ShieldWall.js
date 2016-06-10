"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Shield Wall", "Chronicles", "CHR");
  }
}

module.exports = ShieldWall;
