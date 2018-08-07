"use strict";
const Constants = require ("../../../Constants");
const DesecrationDemonBase = require("../setMM3/DesecrationDemon");

class DesecrationDemon extends DesecrationDemonBase {
  constructor (game) {
    super(game, "Desecration Demon", "Return to Ravnica", "RTR");
  }
}

module.exports = DesecrationDemon;
