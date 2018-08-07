"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofDenial extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Denial", "Modern Masters 2017", "MM3");
  }
}

module.exports = WallofDenial;
