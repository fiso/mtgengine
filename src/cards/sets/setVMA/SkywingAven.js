"use strict";
const Constants = require ("../../../Constants");
const SkywingAvenBase = require("../setTOR/SkywingAven");

class SkywingAven extends SkywingAvenBase {
  constructor(game) {
    super(game, "Skywing Aven", "Vintage Masters", "VMA");
  }
}

module.exports = SkywingAven;
