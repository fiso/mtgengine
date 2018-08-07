"use strict";
const Constants = require ("../../../Constants");
const SunpetalGroveBase = require("../setXLN/SunpetalGrove");

class SunpetalGrove extends SunpetalGroveBase {
  constructor (game) {
    super(game, "Sunpetal Grove", "Ixalan Promos", "PXLN");
  }
}

module.exports = SunpetalGrove;
