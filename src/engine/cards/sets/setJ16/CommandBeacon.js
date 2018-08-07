"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommandBeacon extends UnimplementedCard {
  constructor (game) {
    super(game, "Command Beacon", "Judge Gift Cards 2016", "J16");
  }
}

module.exports = CommandBeacon;
