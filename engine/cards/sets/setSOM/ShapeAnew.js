"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShapeAnew extends Card {
  constructor(game) {
    super(game, "Shape Anew", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ShapeAnew;
