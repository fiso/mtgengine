"use strict";
const Constants = require ("../../../Constants");
const StormtideLeviathanBase = require("../setM11/StormtideLeviathan");

class StormtideLeviathan extends StormtideLeviathanBase {
  constructor(game) {
    super(game, "Stormtide Leviathan", "Magic 2015 Core Set", "M15");
  }
}

module.exports = StormtideLeviathan;
