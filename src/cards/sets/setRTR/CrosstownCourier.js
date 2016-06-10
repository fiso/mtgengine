"use strict";
const Constants = require ("../../../Constants");
const CrosstownCourierBase = require("../setDDM/CrosstownCourier");

class CrosstownCourier extends CrosstownCourierBase {
  constructor (game) {
    super(game, "Crosstown Courier", "Return to Ravnica", "RTR");
  }
}

module.exports = CrosstownCourier;
