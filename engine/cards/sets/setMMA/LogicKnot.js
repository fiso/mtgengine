"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LogicKnotBase = require("../setFUT/LogicKnot.js");

class LogicKnot extends LogicKnotBase {
  constructor(game) {
    super(game, "Logic Knot", "Modern Masters", "MMA");
  }
}

module.exports = LogicKnot;
