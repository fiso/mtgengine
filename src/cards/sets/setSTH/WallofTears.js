"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofTears extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Tears", "Stronghold", "STH");
  }
}

module.exports = WallofTears;
