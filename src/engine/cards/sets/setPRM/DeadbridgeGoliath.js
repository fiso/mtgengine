"use strict";
const Constants = require ("../../../Constants");
const DeadbridgeGoliathBase = require("../setRTR/DeadbridgeGoliath");

class DeadbridgeGoliath extends DeadbridgeGoliathBase {
  constructor (game) {
    super(game, "Deadbridge Goliath", "Magic Online Promos", "PRM");
  }
}

module.exports = DeadbridgeGoliath;
