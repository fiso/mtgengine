"use strict";
const Constants = require ("../../../Constants");
const DynachargeBase = require("../setMM3/Dynacharge");

class Dynacharge extends DynachargeBase {
  constructor (game) {
    super(game, "Dynacharge", "Return to Ravnica", "RTR");
  }
}

module.exports = Dynacharge;
