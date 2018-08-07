"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofRazors extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Razors", "Stronghold", "STH");
  }
}

module.exports = WallofRazors;
