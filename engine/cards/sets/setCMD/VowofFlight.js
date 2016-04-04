"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VowofFlight extends Card {
  constructor(game) {
    super(game, "Vow of Flight", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VowofFlight;
