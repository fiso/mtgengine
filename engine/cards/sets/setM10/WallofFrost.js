"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofFrost extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Frost", "Magic 2010", "M10");
  }
}

module.exports = WallofFrost;
