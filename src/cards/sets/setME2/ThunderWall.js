"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Thunder Wall", "Masters Edition II", "ME2");
  }
}

module.exports = ThunderWall;
