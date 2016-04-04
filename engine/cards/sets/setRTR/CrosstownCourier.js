"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrosstownCourierBase = require("../setDDM/CrosstownCourier.js");

class CrosstownCourier extends CrosstownCourierBase {
  constructor(game) {
    super(game, "Crosstown Courier", "Return to Ravnica", "RTR");
  }
}

module.exports = CrosstownCourier;
