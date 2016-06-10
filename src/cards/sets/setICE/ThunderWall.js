"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Thunder Wall", "Ice Age", "ICE");
  }
}

module.exports = ThunderWall;
