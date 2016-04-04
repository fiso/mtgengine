"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrozenShadeBase = require("../setCED/FrozenShade.js");

class FrozenShade extends FrozenShadeBase {
  constructor(game) {
    super(game, "Frozen Shade", "Unlimited Edition", "2ED");
  }
}

module.exports = FrozenShade;
