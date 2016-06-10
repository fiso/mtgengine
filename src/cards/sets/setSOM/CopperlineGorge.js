"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopperlineGorge extends UnimplementedCard {
  constructor (game) {
    super(game, "Copperline Gorge", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CopperlineGorge;
