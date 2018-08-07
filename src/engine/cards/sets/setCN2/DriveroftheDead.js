"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DriveroftheDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Driver of the Dead", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = DriveroftheDead;
