"use strict";
const Constants = require ("../../../Constants");
const DriveroftheDeadBase = require("../setCN2/DriveroftheDead");

class DriveroftheDead extends DriveroftheDeadBase {
  constructor (game) {
    super(game, "Driver of the Dead", "Avacyn Restored", "AVR");
  }
}

module.exports = DriveroftheDead;
