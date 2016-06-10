"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShapeAnew extends UnimplementedCard {
  constructor (game) {
    super(game, "Shape Anew", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ShapeAnew;
