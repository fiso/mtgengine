"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrenellatedWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Crenellated Wall", "Mercadian Masques", "MMQ");
  }
}

module.exports = CrenellatedWall;
