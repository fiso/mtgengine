"use strict";
const Constants = require ("../../../Constants");
const LogicKnotBase = require("../setFUT/LogicKnot");

class LogicKnot extends LogicKnotBase {
  constructor(game) {
    super(game, "Logic Knot", "Modern Masters", "MMA");
  }
}

module.exports = LogicKnot;
