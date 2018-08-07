"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofVipers extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Vipers", "Prophecy", "PCY");
  }
}

module.exports = WallofVipers;
