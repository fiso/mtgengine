"use strict";
const Constants = require ("../../../Constants");
const SmotherBase = require("../setDDP/Smother");

class Smother extends SmotherBase {
  constructor (game) {
    super(game, "Smother", "Friday Night Magic 2003", "F03");
  }
}

module.exports = Smother;
