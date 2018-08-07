"use strict";
const Constants = require ("../../../Constants");
const DeadbridgeGoliathBase = require("../setRTR/DeadbridgeGoliath");

class DeadbridgeGoliath extends DeadbridgeGoliathBase {
  constructor (game) {
    super(game, "Deadbridge Goliath", "Return to Ravnica Promos", "PRTR");
  }
}

module.exports = DeadbridgeGoliath;
