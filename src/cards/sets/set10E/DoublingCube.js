"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoublingCube extends UnimplementedCard {
  constructor (game) {
    super(game, "Doubling Cube", "Tenth Edition", "10E");
  }
}

module.exports = DoublingCube;
