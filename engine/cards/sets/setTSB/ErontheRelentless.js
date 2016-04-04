"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ErontheRelentlessBase = require("../setHML/ErontheRelentless.js");

class ErontheRelentless extends ErontheRelentlessBase {
  constructor(game) {
    super(game, "Eron the Relentless", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = ErontheRelentless;
