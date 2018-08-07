"use strict";
const Constants = require ("../../../Constants");
const RegalForceBase = require("../setDDU/RegalForce");

class RegalForce extends RegalForceBase {
  constructor (game) {
    super(game, "Regal Force", "Eventide", "EVE");
  }
}

module.exports = RegalForce;
