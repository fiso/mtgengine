"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShapeStealer extends UnimplementedCard {
  constructor(game) {
    super(game, "Shape Stealer", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ShapeStealer;
