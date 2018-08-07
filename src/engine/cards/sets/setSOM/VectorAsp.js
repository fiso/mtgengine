"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VectorAsp extends UnimplementedCard {
  constructor (game) {
    super(game, "Vector Asp", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VectorAsp;
