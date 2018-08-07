"use strict";
const Constants = require ("../../../Constants");
const PrideSovereignBase = require("../setHOU/PrideSovereign");

class PrideSovereign extends PrideSovereignBase {
  constructor (game) {
    super(game, "Pride Sovereign", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = PrideSovereign;
