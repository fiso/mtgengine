"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodenSphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Wooden Sphere", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WoodenSphere;
