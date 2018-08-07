"use strict";
const Constants = require ("../../../Constants");
const SkywingAvenBase = require("../setVMA/SkywingAven");

class SkywingAven extends SkywingAvenBase {
  constructor (game) {
    super(game, "Skywing Aven", "Torment", "TOR");
  }
}

module.exports = SkywingAven;
