"use strict";
const Constants = require ("../../../Constants");
const StormtideLeviathanBase = require("../setM15/StormtideLeviathan");

class StormtideLeviathan extends StormtideLeviathanBase {
  constructor (game) {
    super(game, "Stormtide Leviathan", "Magic 2011", "M11");
  }
}

module.exports = StormtideLeviathan;
