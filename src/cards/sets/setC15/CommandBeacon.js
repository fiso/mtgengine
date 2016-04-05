"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommandBeacon extends UnimplementedCard {
  constructor(game) {
    super(game, "Command Beacon", "Commander 2015", "C15");
  }
}

module.exports = CommandBeacon;
