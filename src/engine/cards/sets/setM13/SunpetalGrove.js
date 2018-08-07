"use strict";
const Constants = require ("../../../Constants");
const SunpetalGroveBase = require("../setXLN/SunpetalGrove");

class SunpetalGrove extends SunpetalGroveBase {
  constructor (game) {
    super(game, "Sunpetal Grove", "Magic 2013", "M13");
  }
}

module.exports = SunpetalGrove;
