"use strict";
const Constants = require ("../../../Constants");
const SunpetalGroveBase = require("../setXLN/SunpetalGrove");

class SunpetalGrove extends SunpetalGroveBase {
  constructor (game) {
    super(game, "Sunpetal Grove", "Magic 2012", "M12");
  }
}

module.exports = SunpetalGrove;
