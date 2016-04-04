"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChildofNightBase = require("../setDDK/ChildofNight.js");

class ChildofNight extends ChildofNightBase {
  constructor(game) {
    super(game, "Child of Night", "Magic 2012", "M12");
  }
}

module.exports = ChildofNight;
