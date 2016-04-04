"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormtideLeviathanBase = require("../setM11/StormtideLeviathan.js");

class StormtideLeviathan extends StormtideLeviathanBase {
  constructor(game) {
    super(game, "Stormtide Leviathan", "Magic 2015 Core Set", "M15");
  }
}

module.exports = StormtideLeviathan;
