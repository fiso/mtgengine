"use strict";
const Constants = require ("../../../Constants");
const HuntingMoaBase = require("../setARC/HuntingMoa");

class HuntingMoa extends HuntingMoaBase {
  constructor (game) {
    super(game, "Hunting Moa", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = HuntingMoa;
