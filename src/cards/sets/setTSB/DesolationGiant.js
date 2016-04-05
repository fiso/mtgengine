"use strict";
const Constants = require ("../../../Constants");
const DesolationGiantBase = require("../setAPC/DesolationGiant");

class DesolationGiant extends DesolationGiantBase {
  constructor(game) {
    super(game, "Desolation Giant", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = DesolationGiant;
