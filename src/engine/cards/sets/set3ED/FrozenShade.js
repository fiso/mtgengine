"use strict";
const Constants = require ("../../../Constants");
const FrozenShadeBase = require("../set5ED/FrozenShade");

class FrozenShade extends FrozenShadeBase {
  constructor (game) {
    super(game, "Frozen Shade", "Revised Edition", "3ED");
  }
}

module.exports = FrozenShade;
