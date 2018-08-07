"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrozenShade extends UnimplementedCard {
  constructor (game) {
    super(game, "Frozen Shade", "Fifth Edition", "5ED");
  }
}

module.exports = FrozenShade;
