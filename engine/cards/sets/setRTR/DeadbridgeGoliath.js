"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeadbridgeGoliathBase = require("../setpLPA/DeadbridgeGoliath.js");

class DeadbridgeGoliath extends DeadbridgeGoliathBase {
  constructor(game) {
    super(game, "Deadbridge Goliath", "Return to Ravnica", "RTR");
  }
}

module.exports = DeadbridgeGoliath;
