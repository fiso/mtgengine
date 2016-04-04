"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MireShade extends UnimplementedCard {
  constructor(game) {
    super(game, "Mire Shade", "Mirage", "MIR");
  }
}

module.exports = MireShade;
