"use strict";
const Constants = require ("../../../Constants");
const RivenTurnbullBase = require("../setLEG/RivenTurnbull");

class RivenTurnbull extends RivenTurnbullBase {
  constructor(game) {
    super(game, "Riven Turnbull", "Masters Edition III", "ME3");
  }
}

module.exports = RivenTurnbull;
