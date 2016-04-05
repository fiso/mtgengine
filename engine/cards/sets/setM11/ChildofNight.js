"use strict";
const Constants = require ("../../../Constants");
const ChildofNightBase = require("../setDDK/ChildofNight");

class ChildofNight extends ChildofNightBase {
  constructor(game) {
    super(game, "Child of Night", "Magic 2011", "M11");
  }
}

module.exports = ChildofNight;
