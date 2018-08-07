"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoomingShade extends UnimplementedCard {
  constructor (game) {
    super(game, "Looming Shade", "Magic 2010", "M10");
  }
}

module.exports = LoomingShade;
