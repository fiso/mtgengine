"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrozenShade extends UnimplementedCard {
  constructor (game) {
    super(game, "Frozen Shade", "Collector's Edition", "CED");
  }
}

module.exports = FrozenShade;
