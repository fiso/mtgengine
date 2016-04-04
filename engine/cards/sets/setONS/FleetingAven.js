"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FleetingAven extends Card {
  constructor(game) {
    super(game, "Fleeting Aven", "Onslaught", "ONS");
  }
}

module.exports = FleetingAven;
