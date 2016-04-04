"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DriveroftheDead extends Card {
  constructor(game) {
    super(game, "Driver of the Dead", "Avacyn Restored", "AVR");
  }
}

module.exports = DriveroftheDead;
