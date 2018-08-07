"use strict";
const Constants = require ("../../../Constants");
const FavorableWindsBase = require("../setXLN/FavorableWinds");

class FavorableWinds extends FavorableWindsBase {
  constructor (game) {
    super(game, "Favorable Winds", "Avacyn Restored", "AVR");
  }
}

module.exports = FavorableWinds;
