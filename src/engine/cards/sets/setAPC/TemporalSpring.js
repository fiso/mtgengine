"use strict";
const Constants = require ("../../../Constants");
const TemporalSpringBase = require("../setTD0/TemporalSpring");

class TemporalSpring extends TemporalSpringBase {
  constructor (game) {
    super(game, "Temporal Spring", "Apocalypse", "APC");
  }
}

module.exports = TemporalSpring;
