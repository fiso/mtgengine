"use strict";
const Constants = require ("../../../Constants");
const StormtideLeviathanBase = require("../setM11/StormtideLeviathan");

class StormtideLeviathan extends StormtideLeviathanBase {
  constructor(game) {
    super(game, "Stormtide Leviathan", "Magic 2013", "M13");
  }
}

module.exports = StormtideLeviathan;
