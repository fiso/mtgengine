"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrReservoir extends Card {
  constructor(game) {
    super(game, "Myr Reservoir", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MyrReservoir;
