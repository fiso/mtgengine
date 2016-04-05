"use strict";
const Constants = require ("../../../Constants");
const SkyshroudFalconBase = require("../set7ED/SkyshroudFalcon");

class SkyshroudFalcon extends SkyshroudFalconBase {
  constructor(game) {
    super(game, "Skyshroud Falcon", "Stronghold", "STH");
  }
}

module.exports = SkyshroudFalcon;
