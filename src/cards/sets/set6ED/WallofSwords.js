"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofSwords extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Swords", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WallofSwords;
