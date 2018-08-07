"use strict";
const Constants = require ("../../../Constants");
const LeoninArbiterBase = require("../setC17/LeoninArbiter");

class LeoninArbiter extends LeoninArbiterBase {
  constructor (game) {
    super(game, "Leonin Arbiter", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LeoninArbiter;
