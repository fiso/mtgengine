"use strict";
const Constants = require ("../../../Constants");
const HuntingPackBase = require("../setIMA/HuntingPack");

class HuntingPack extends HuntingPackBase {
  constructor (game) {
    super(game, "Hunting Pack", "Scourge", "SCG");
  }
}

module.exports = HuntingPack;
