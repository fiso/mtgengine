"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnimateWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Animate Wall", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AnimateWall;
