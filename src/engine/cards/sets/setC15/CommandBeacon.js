"use strict";
const Constants = require ("../../../Constants");
const CommandBeaconBase = require("../setJ16/CommandBeacon");

class CommandBeacon extends CommandBeaconBase {
  constructor (game) {
    super(game, "Command Beacon", "Commander 2015", "C15");
  }
}

module.exports = CommandBeacon;
