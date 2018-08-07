"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadGone extends UnimplementedCard {
  constructor (game) {
    super(game, "Dead // Gone", "Planar Chaos", "PLC");
  }
}

module.exports = DeadGone;
