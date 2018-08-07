"use strict";
const Constants = require ("../../../Constants");
const CommandBeaconBase = require("../setJ16/CommandBeacon");

class CommandBeacon extends CommandBeaconBase {
  constructor (game) {
    super(game, "Command Beacon", "Legendary Cube", "PZ1");
  }
}

module.exports = CommandBeacon;
