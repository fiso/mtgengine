"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofSouls extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Souls", "Stronghold", "STH");
  }
}

module.exports = WallofSouls;
