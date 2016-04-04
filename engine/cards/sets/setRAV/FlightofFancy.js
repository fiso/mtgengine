"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlightofFancy extends Card {
  constructor(game) {
    super(game, "Flight of Fancy", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FlightofFancy;
