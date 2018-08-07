"use strict";
const Constants = require ("../../../Constants");
const MagnifyingGlassBase = require("../setC18/MagnifyingGlass");

class MagnifyingGlass extends MagnifyingGlassBase {
  constructor (game) {
    super(game, "Magnifying Glass", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MagnifyingGlass;
