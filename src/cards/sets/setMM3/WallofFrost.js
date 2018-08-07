"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofFrost extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Frost", "Modern Masters 2017", "MM3");
  }
}

module.exports = WallofFrost;
