"use strict";
const Constants = require ("../../../Constants");
const LogicKnotBase = require("../setMMA/LogicKnot");

class LogicKnot extends LogicKnotBase {
  constructor (game) {
    super(game, "Logic Knot", "Future Sight", "FUT");
  }
}

module.exports = LogicKnot;
