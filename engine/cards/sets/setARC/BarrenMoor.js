"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrenMoor extends UnimplementedCard {
  constructor(game) {
    super(game, "Barren Moor", "Archenemy", "ARC");
  }
}

module.exports = BarrenMoor;
