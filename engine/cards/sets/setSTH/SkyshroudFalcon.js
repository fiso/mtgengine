"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyshroudFalconBase = require("../set7ED/SkyshroudFalcon.js");

class SkyshroudFalcon extends SkyshroudFalconBase {
  constructor(game) {
    super(game, "Skyshroud Falcon", "Stronghold", "STH");
  }
}

module.exports = SkyshroudFalcon;
