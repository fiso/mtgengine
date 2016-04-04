"use strict";
const Constants = require ("../../../Constants");
const FeralShadowBase = require("../setBTD/FeralShadow");

class FeralShadow extends FeralShadowBase {
  constructor(game) {
    super(game, "Feral Shadow", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FeralShadow;
