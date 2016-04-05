"use strict";
const Constants = require ("../../../Constants");
const EagerCadetBase = require("../set8ED/EagerCadet");

class EagerCadet extends EagerCadetBase {
  constructor(game) {
    super(game, "Eager Cadet", "Starter 2000", "S00");
  }
}

module.exports = EagerCadet;
