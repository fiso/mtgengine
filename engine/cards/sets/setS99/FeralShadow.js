"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeralShadowBase = require("../setBTD/FeralShadow.js");

class FeralShadow extends FeralShadowBase {
  constructor(game) {
    super(game, "Feral Shadow", "Starter 1999", "S99");
  }
}

module.exports = FeralShadow;
