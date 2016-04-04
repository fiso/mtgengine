"use strict";
const Constants = require ("../../../Constants");
const HuntingMoaBase = require("../setARC/HuntingMoa");

class HuntingMoa extends HuntingMoaBase {
  constructor(game) {
    super(game, "Hunting Moa", "Urza's Destiny", "UDS");
  }
}

module.exports = HuntingMoa;
