"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlacialWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Glacial Wall", "Eternal Masters", "EMA");
  }
}

module.exports = GlacialWall;
