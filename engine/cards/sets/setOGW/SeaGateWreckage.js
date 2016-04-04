"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeaGateWreckage extends Card {
  constructor(game) {
    super(game, "Sea Gate Wreckage", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SeaGateWreckage;
