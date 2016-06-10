"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofShadows extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Shadows", "Chronicles", "CHR");
  }
}

module.exports = WallofShadows;
