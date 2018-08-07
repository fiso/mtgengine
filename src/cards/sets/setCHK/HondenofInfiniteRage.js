"use strict";
const Constants = require ("../../../Constants");
const HondenofInfiniteRageBase = require("../setEMA/HondenofInfiniteRage");

class HondenofInfiniteRage extends HondenofInfiniteRageBase {
  constructor (game) {
    super(game, "Honden of Infinite Rage", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HondenofInfiniteRage;
