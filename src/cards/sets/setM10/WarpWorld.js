"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarpWorld extends UnimplementedCard {
  constructor(game) {
    super(game, "Warp World", "Magic 2010", "M10");
  }
}

module.exports = WarpWorld;
