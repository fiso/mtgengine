"use strict";
const Constants = require ("../../../Constants");
const SunpetalGroveBase = require("../setXLN/SunpetalGrove");

class SunpetalGrove extends SunpetalGroveBase {
  constructor (game) {
    super(game, "Sunpetal Grove", "Magic 2010", "M10");
  }
}

module.exports = SunpetalGrove;
