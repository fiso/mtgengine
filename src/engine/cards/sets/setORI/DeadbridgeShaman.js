"use strict";
const Constants = require ("../../../Constants");
const DeadbridgeShamanBase = require("../setEMA/DeadbridgeShaman");

class DeadbridgeShaman extends DeadbridgeShamanBase {
  constructor (game) {
    super(game, "Deadbridge Shaman", "Magic Origins", "ORI");
  }
}

module.exports = DeadbridgeShaman;
