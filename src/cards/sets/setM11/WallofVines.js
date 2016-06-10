"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofVines extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Vines", "Magic 2011", "M11");
  }
}

module.exports = WallofVines;
