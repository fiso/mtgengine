"use strict";
const Constants = require ("../../../Constants");
const ChildofNightBase = require("../setDDK/ChildofNight");

class ChildofNight extends ChildofNightBase {
  constructor(game) {
    super(game, "Child of Night", "Magic 2012", "M12");
  }
}

module.exports = ChildofNight;
