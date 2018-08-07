"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodenSphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Wooden Sphere", "Eighth Edition", "8ED");
  }
}

module.exports = WoodenSphere;
