"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoamLarva extends Card {
  constructor(game) {
    super(game, "Loam Larva", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = LoamLarva;
