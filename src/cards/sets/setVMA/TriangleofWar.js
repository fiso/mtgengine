"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TriangleofWar extends UnimplementedCard {
  constructor (game) {
    super(game, "Triangle of War", "Vintage Masters", "VMA");
  }
}

module.exports = TriangleofWar;
