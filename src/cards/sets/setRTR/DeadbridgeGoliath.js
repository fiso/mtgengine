"use strict";
const Constants = require ("../../../Constants");
const DeadbridgeGoliathBase = require("../setpLPA/DeadbridgeGoliath");

class DeadbridgeGoliath extends DeadbridgeGoliathBase {
  constructor (game) {
    super(game, "Deadbridge Goliath", "Return to Ravnica", "RTR");
  }
}

module.exports = DeadbridgeGoliath;
