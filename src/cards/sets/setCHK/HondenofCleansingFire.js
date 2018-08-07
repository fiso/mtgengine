"use strict";
const Constants = require ("../../../Constants");
const HondenofCleansingFireBase = require("../setEMA/HondenofCleansingFire");

class HondenofCleansingFire extends HondenofCleansingFireBase {
  constructor (game) {
    super(game, "Honden of Cleansing Fire", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HondenofCleansingFire;
