"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dead extends UnimplementedCard {
  constructor(game) {
    super(game, "Dead", "Planar Chaos", "PLC");
  }
}

module.exports = Dead;
