"use strict";
const Constants = require ("../../../Constants");
const SunpetalGroveBase = require("../setM10/SunpetalGrove");

class SunpetalGrove extends SunpetalGroveBase {
  constructor (game) {
    super(game, "Sunpetal Grove", "Magic 2011", "M11");
  }
}

module.exports = SunpetalGrove;
