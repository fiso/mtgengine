"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoomingShade extends UnimplementedCard {
  constructor(game) {
    super(game, "Looming Shade", "Eighth Edition", "8ED");
  }
}

module.exports = LoomingShade;
