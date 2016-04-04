"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrozenShadeBase = require("../setCED/FrozenShade.js");

class FrozenShade extends FrozenShadeBase {
  constructor(game) {
    super(game, "Frozen Shade", "Limited Edition Alpha", "LEA");
  }
}

module.exports = FrozenShade;
