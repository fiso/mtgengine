"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlacialWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Glacial Wall", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GlacialWall;
