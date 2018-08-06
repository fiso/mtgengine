"use strict";
const Constants = require ("../../../Constants");
const HondenofSeeingWindsBase = require("../setCHK/HondenofSeeingWinds");

class HondenofSeeingWinds extends HondenofSeeingWindsBase {
  constructor (game) {
    super(game, "Honden of Seeing Winds", "Eternal Masters", "EMA");
  }
}

module.exports = HondenofSeeingWinds;
