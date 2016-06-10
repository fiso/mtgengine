"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DriveroftheDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Driver of the Dead", "Avacyn Restored", "AVR");
  }
}

module.exports = DriveroftheDead;
