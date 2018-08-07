"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofFaith extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Faith", "Magic 2010", "M10");
  }
}

module.exports = WallofFaith;
