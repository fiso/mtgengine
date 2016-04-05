"use strict";
const Constants = require ("../../../Constants");
const SmotherBase = require("../setDDP/Smother");

class Smother extends SmotherBase {
  constructor(game) {
    super(game, "Smother", "Friday Night Magic", "pFNM");
  }
}

module.exports = Smother;
