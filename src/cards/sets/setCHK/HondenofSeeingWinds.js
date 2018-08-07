"use strict";
const Constants = require ("../../../Constants");
const HondenofSeeingWindsBase = require("../setEMA/HondenofSeeingWinds");

class HondenofSeeingWinds extends HondenofSeeingWindsBase {
  constructor (game) {
    super(game, "Honden of Seeing Winds", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HondenofSeeingWinds;
