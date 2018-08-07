"use strict";
const Constants = require ("../../../Constants");
const DismemberBase = require("../setMM2/Dismember");

class Dismember extends DismemberBase {
  constructor (game) {
    super(game, "Dismember", "Friday Night Magic 2012", "F12");
  }
}

module.exports = Dismember;
