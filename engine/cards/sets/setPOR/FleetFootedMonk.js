"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FleetFootedMonk extends Card {
  constructor(game) {
    super(game, "Fleet-Footed Monk", "Portal", "POR");
  }
}

module.exports = FleetFootedMonk;
