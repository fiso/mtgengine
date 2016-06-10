"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofWonder extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Wonder", "Chronicles", "CHR");
  }
}

module.exports = WallofWonder;
