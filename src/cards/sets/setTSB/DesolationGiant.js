"use strict";
const Constants = require ("../../../Constants");
const DesolationGiantBase = require("../setCM2/DesolationGiant");

class DesolationGiant extends DesolationGiantBase {
  constructor (game) {
    super(game, "Desolation Giant", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = DesolationGiant;
