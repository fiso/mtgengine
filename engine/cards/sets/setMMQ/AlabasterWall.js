"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabasterWall extends UnimplementedCard {
  constructor(game) {
    super(game, "Alabaster Wall", "Mercadian Masques", "MMQ");
  }
}

module.exports = AlabasterWall;
