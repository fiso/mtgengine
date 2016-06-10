"use strict";
const Constants = require ("../../../Constants");
const ChildofNightBase = require("../setDDK/ChildofNight");

class ChildofNight extends ChildofNightBase {
  constructor (game) {
    super(game, "Child of Night", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ChildofNight;
