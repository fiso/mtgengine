"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShiftingWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Shifting Wall", "Stronghold", "STH");
  }
}

module.exports = ShiftingWall;
