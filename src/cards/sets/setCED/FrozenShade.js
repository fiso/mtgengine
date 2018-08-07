"use strict";
const Constants = require ("../../../Constants");
const FrozenShadeBase = require("../set5ED/FrozenShade");

class FrozenShade extends FrozenShadeBase {
  constructor (game) {
    super(game, "Frozen Shade", "Collectors’ Edition", "CED");
  }
}

module.exports = FrozenShade;
